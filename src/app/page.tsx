"use client"

import Link from "next/link";
import { useEffect } from "react";


const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id: string) => {
  const element = document.getElementById(id);                    // Localiza el elemento a animar.
  if (!element) return;                                           // Si no se encuentra, retorna.

  const text = element.innerText.split("");                       // El elemento a animar se divide en letras (text).
  element.innerText = "";                                         // Limpia el texto original para insertar las letras con animacion.

  text.forEach((value, index) => {                                // Por cada carácter crea tres span anidados: outer, inner y letter.
    const outer = document.createElement("span");                 // Span outer: para manejar transformaciones. Es el que se mueve.
    outer.className = "outer";

    const inner = document.createElement("span");                 // Span inner: para manejar el retraso de la animacion.
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");                 // Span letter: para mostrar el carácter. Se le da el valor de la letra (value).
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000}ms`

    inner.appendChild(letter);                                    // Se inserta el span letter dentro del span inner.
    outer.appendChild(inner);                                     // Se inserta el span inner dentro del span outer.
    element.appendChild(outer);                                   // Se inserta el span outer dentro del elemento original.
    // El resultado es una estructura anidada: <span class="outer"><span class="inner"><span class="letter">valor</span></span></span> 
  })
}

/**
 * TODO — build the hero here.
 *
 * - Four rows, each with two `.word`-style elements spread with
 *   `justify-between` (see the `.word` CSS you'll add in globals.css).
 * - The last row is two links (e.g. email + reel), each with a "fancy"
 *   scrambled-letter hover effect: split the link's text into per-letter
 *   nested spans (outer > inner > letter) on mount, then let the
 *   `.fancy` CSS rules animate them apart on hover.
 */

export default function Home() {

  useEffect(() => {
    enhance("hero-link-01");
    enhance("hero-link-02");
  }, [])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div id="text" className="w-1/2 max-[900px]:w-[70%]">
        <div className="flex justify-between">
          <p className="word">Nadia</p>
          <p className="word">Kessler</p>
        </div>

        <div className="flex justify-between">
          <p className="word">Motion</p>
          <p className="word">&amp;</p>
        </div>

        <div className="flex justify-between">
          <p className="word">Sound</p>
          <p className="word">Direction</p>
        </div>

        <div className="flex justify-between">
          <Link
            id="hero-link-01"
            href="mailto:hellow@nadiekessler.studio"
            target="_blank"
            className="word fancy"
          >
            &#x2192;Email
          </Link>
          <Link
            id="hero-link-02"
            href="https://instagram.com/nadiakessler.studio"
            target="_blank"
            className="word fancy"
          >
            &#x2192;Reel
          </Link>
        </div>
      </div>
    </div>
  );
}
