"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

/** Duración en milisegundos de cada mitad de la animación (cubrir o descubrir) */
const CURTAIN_TRANSITION_MS = 750;

/** Curva Bézier personalizada para una aceleración y desaceleración fluida y elegante */
const CURTAIN_EASE = [0.83, 0, 0.17, 1] as const;

/**
 * Estados del ciclo de vida de la transición de página:
 * - "idle":      Reposo. La pantalla está visible y lista para recibir clics.
 * - "covering":  El telón sube desde abajo (origin-bottom) tapando la pantalla.
 * - "covered":   La pantalla está 100% tapada. En este instante Next.js cambia la ruta.
 * - "revealing": El telón se retrae hacia arriba (origin-top), mostrando la nueva página.
 */
type Phase = "idle" | "covering" | "covered" | "revealing";

interface TransitionContextValue {
  navigate: (href: string) => void;
}

/** Contexto de React que distribuye la función personalizada `navigate` a toda la aplicación */
const TransitionContext = createContext<TransitionContextValue | null>(null);

/**
 * Hook para consumir la navegación con transición.
 * Si se usa dentro de un componente hijo de `RouteTransition`, usa su método `navigate`.
 * Si se usa por fuera (fallback), recurre al `router.push` estándar de Next.js.
 */
export const useTransitionNavigate = () => {
  const ctx = useContext(TransitionContext);
  const router = useRouter();
  return ctx?.navigate ?? router.push;
};

/**
 * Componente Proveedor que orquesta la animación de doble telón (curtain effect).
 *
 * Funcionamiento:
 * 1. El usuario hace clic en un enlace (llamando a `navigate(href)`).
 * 2. Telón 1 (`origin-bottom`): crece de abajo hacia arriba (`scaleY: 0 -> 1`), tapando la vista actual.
 * 3. Al completarse la animación ("covered"): se dispara `router.push(href)`.
 * 4. Cuando Next.js cambia el `pathname`, se pasa a fase "revealing".
 * 5. Telón 2 (`origin-top`): se encoge hacia arriba (`scaleY: 1 -> 0`), descubriendo la nueva vista.
 * 6. Finalmente, el estado vuelve a "idle".
 */
const RouteTransition = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Inicia en "covered" para que la primera carga de la web entre descubriéndose suavemente ("revealing")
  const [phase, setPhase] = useState<Phase>("covered");

  // Almacena la URL de destino mientras transcurre la animación de cubrir pantalla
  const pendingHref = useRef<string | null>(null);

  // Guarda la ruta previa para detectar cuándo Next.js ha completado el cambio de página
  const previousPathname = useRef(pathname);

  /**
   * Inicia el proceso de salida de la página actual hacia la nueva ruta
   */
  const navigate = useCallback(
    (href: string) => {
      // Evita disparar transiciones si ya estamos en esa página o si ya hay una animación en curso
      if (href === pathname || phase !== "idle") return;

      pendingHref.current = href;
      setPhase("covering"); // Inicia la subida del telón
    },
    [pathname, phase]
  );

  /**
   * Al montar la aplicación por primera vez:
   * Pasa de "covered" a "revealing" para revelar la página de entrada con la animación.
   */
  useEffect(() => {
    setPhase((prev) => (prev === "covered" ? "revealing" : prev));
  }, []);

  /**
   * Detecta cuando Next.js efectivamente renderizó la nueva ruta.
   * Si la pantalla estaba cubierta ("covered"), comienza a descubrirla ("revealing").
   */
  useEffect(() => {
    if (pathname !== previousPathname.current) {
      previousPathname.current = pathname;
      if (phase === "covered") {
        setPhase("revealing");
      }
    }
  }, [pathname, phase]);

  // --- CÁLCULO DE PROPIEDADES DE ANIMACIÓN PARA CADA TELÓN ---

  // Telón 1 (Cover): se expande (scaleY: 1) durante "covering" y se mantiene en "covered"
  const coverScaleY = phase === "covering" || phase === "covered" ? 1 : 0;
  // Solo tiene duración activa cuando está subiendo; si no, el cambio es instantáneo (0s)
  const coverDuration = phase === "covering" ? CURTAIN_TRANSITION_MS / 1000 : 0;

  // Telón 2 (Reveal): comienza lleno (scaleY: 1) en "covered" y colapsa a 0 durante "revealing"
  const revealScaleY = phase === "covered" ? 1 : 0;
  // Solo anima con duración durante la fase de revelado
  const revealDuration =
    phase === "revealing" ? CURTAIN_TRANSITION_MS / 1000 : 0;

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {/* Contenido principal de la página */}
      <div className="relative">{children}</div>

      {/* 
        TELÓN 1 (Cover):
        - Fijo sobre toda la pantalla (z-[10000]).
        - Anclado abajo (`origin-bottom`).
        - Crece hacia arriba tapando la pantalla anterior.
      */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-screen w-full origin-bottom bg-accent"
        animate={{ scaleY: coverScaleY }}
        transition={{ duration: coverDuration, ease: CURTAIN_EASE }}
        onAnimationComplete={() => {
          // Una vez tapada la pantalla por completo, navegamos a la nueva ruta
          if (phase === "covering") {
            setPhase("covered");
            if (pendingHref.current) {
              router.push(pendingHref.current);
              pendingHref.current = null;
            }
          }
        }}
      />

      {/* 
        TELÓN 2 (Reveal):
        - Fijo sobre toda la pantalla (z-[10000]).
        - Anclado arriba (`origin-top`).
        - Se retrae hacia el techo descubriendo la nueva página recién cargada.
      */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-screen w-full origin-top bg-accent"
        animate={{ scaleY: revealScaleY }}
        transition={{ duration: revealDuration, ease: CURTAIN_EASE }}
        onAnimationComplete={() => {
          // Al terminar de descubrir la pantalla, volvemos al estado de reposo
          if (phase === "revealing") {
            setPhase("idle");
          }
        }}
      />
    </TransitionContext.Provider>
  );
};

export default RouteTransition;
