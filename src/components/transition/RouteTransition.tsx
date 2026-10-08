"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CURTAIN_TRANSITION_MS = 750;
const CURTAIN_EASE = [0.83, 0, 0.17, 1] as const;

type Phase = "idle" | "covering" | "covered" | "revealing";



/**
 * 
 * Este código es la estructura base (o esqueleto) para implementar animaciones de 
 * transición entre páginas en una aplicación de Next.js (usando el App Router).
 *  
 */


interface TransitionContextValue {
  navigate: (href: string) => void;
}

/** El contexto guardará una función llamada navigate que recibe un href0 */
const TransitionContext = createContext<TransitionContextValue | null>(null);




// Intenta obtener la función navigate del Contexto (ctx).
export const useTransitionNavigate = () => {
  const ctx = useContext(TransitionContext);
  const router = useRouter();
  return ctx?.navigate ?? router.push;        // Sino hay ctx.navigate, usa router.push
};



/**
 * 
 * Este es el componente que "provee" el contexto a sus hijos. 
 * Envuelve a los hijos en un <TransitionContext.Provider> para que cualquier 
 * hijo pueda usar useTransitionNavigate y asi dispòner de la funcion navigate para navegar entre rutas.
 * 
 */

const RouteTransition = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("covered");
  const pendingHref = useRef<string | null>(null);
  const previousPathname = useRef(pathname); // Guarda el pathname para detectar cambios posteriores cuando se cambie de route



  const navigate = useCallback(
    (href: string) => {
      if (href === pathname || phase !== "idle") return;                         // Si el href de navigate es igual a pathname no hace nada
      pendingHref.current = href;                                                // pero si es diferente entonces guarda el href en pendingHref
      setPhase("covering");                                                      // y cambia el estado de phase a "covering"
    },
    [pathname, phase]
  );

  useEffect(() => {
    setPhase((prev) => (prev === "covered" ? "revealing" : prev));                // Si el estado inicial es "covered", cambia a "revealing" y no hace nada más
  }, []);

  useEffect(() => {
    if (pathname !== previousPathname.current) {                                    // Si al cambiar el pathname este es diferente al anterior
      previousPathname.current = pathname;                                        // actualiza previousPathname
      if (phase === "covered") {                                                    // Entonce si el estado es "covered"
        setPhase("revealing")                                                     // cambia a "revealing"
      }
    }
  }, [pathname, phase]);

  const coverScaley = phase === "covering" || phase === "covered" ? 1 : 0;        // Si el estado es "covering" o "covered" scaleY es 1, si no es 0
  const coverDuration = phase === "covering" ? CURTAIN_TRANSITION_MS / 1000 : 0;  // Si el estado es "covering" la duracion es CURTAIN_TRANSITION_MS / 1000, si no es 0

  const revealScaleY = phase === "covered" ? 1 : 0;                               // Si el estado es "covered" scaleY es 1, si no es 0
  const revealDuration =
    phase === "revealing" ? CURTAIN_TRANSITION_MS / 1000 : 0;                     // Si el estado es "revealing" la duracion es CURTAIN_TRANSITION_MS / 1000, si no es 0

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <div className="relative">{children}</div>

      {/* TODO: barra "cover" fija a pantalla completa (origin-bottom) animada con framer-motion: scaleY 0 -> 1 */}
      {/* TODO: barra "reveal" fija a pantalla completa (origin-top) animada con framer-motion: scaleY 1 -> 0 */}
    </TransitionContext.Provider>
  );
};

export default RouteTransition;
