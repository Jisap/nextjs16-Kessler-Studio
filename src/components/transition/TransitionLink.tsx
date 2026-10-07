"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { useTransitionNavigate } from "./RouteTransition";

type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };


const TransitionLink = ({ href, children, onClick, ...rest }: TransitionLinkProps) => {
  const navigate = useTransitionNavigate();                                                 // Se obtiene la función navigate del Contexto (ctx). Si no hay contexto, usa el router de Next.js.

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {                           // Se define la función handleClick que recibe un evento de mouse. 
    onClick?.(event);                                                                       // Ejecuta el onClick personalizado si el usuario lo pasó
    if (event.defaultPrevented) return;                                                     // Respeta si otro código ya canceló el evento

    // Permite el comportamiento nativo del navegador para aperturas en nuevas pestañas
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;           // Si se presiona una tecla modificadora, no se hace nada.
    if (rest.target === "_blank") return;                                                   // Si el target es "_blank", no se hace nada.

    event.preventDefault();                                                                 // Evita la recarga/navegación brusca por defecto del navegador
    navigate(href.toString());                                                              // Dispara la navegación con transición personalizada
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default TransitionLink;
