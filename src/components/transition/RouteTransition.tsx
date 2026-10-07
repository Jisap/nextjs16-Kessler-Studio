"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useRouter } from "next/navigation";


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



export const useTransitionNavigate = () => {
  const ctx = useContext(TransitionContext);  // Intenta obtener la función navigate del Contexto (ctx).
  const router = useRouter();                 // Si no hay contexto, usa el router de Next.js.
  return ctx?.navigate ?? router.push;        // Devuelve la función navigate o el router.push.
};



/**
 * 
 * Este es el componente que "provee" el contexto a sus hijos. 
 * Envuelve a los hijos en un <TransitionContext.Provider> para que cualquier 
 * hijo pueda usar useTransitionNavigate y asi dispòner de la funcion navigate para navegar entre rutas.
 * 
 */

const RouteTransition = ({ children }: { children: ReactNode }) => {  // Se reciben los children
  const router = useRouter();                                         // Se obtiene el router de Next.js.

  const navigate = (href: string) => {                                // Se define la función navigate que recibe una ruta (href) y la navega.
    router.push(href);
  };

  return (
    //  <TransitionContext.Provider> es un componente que hace disponible el valor 'navigate' 
    //  a todos los componentes hijos que lo necesiten.
    <TransitionContext.Provider value={{ navigate }}>
      <div className="relative">{children}</div>

      {/* TODO: barra "cover" fija a pantalla completa (origin-bottom) animada con framer-motion: scaleY 0 -> 1 */}
      {/* TODO: barra "reveal" fija a pantalla completa (origin-top) animada con framer-motion: scaleY 1 -> 0 */}
    </TransitionContext.Provider>
  );
};

export default RouteTransition;
