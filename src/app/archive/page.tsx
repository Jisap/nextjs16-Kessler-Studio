"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { archives } from "@/data/archive";
import Preview from "@/components/preview/Preview";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

interface ArchiveListItem {
  id: number;
  name: string;
  category: string;
}

const Archive = () => {

  const [archiveList, setArchiveList] = useState<ArchiveListItem[]>([]);              // Lista multiplicada de proyectos para generar la sensación de scroll infinito.

  const containerRef = useRef<HTMLDivElement>(null);                                  // Referencia al contenedor con scroll propio (scroller).

  // Genera un set extenso duplicando la lista base 120 veces con IDs únicos.
  useEffect(() => {
    const initialSet: ArchiveListItem[] = Array(120)                     // Se crea un array de 120 elementos.
      .fill(null)                                                        // Se llena con null.
      .flatMap((_, i) =>                                                 // Por cada uno de esos 120 elementos, toma el array original 
        archives.map((archive, j) => ({                                  // y lo copia completo para crear un array único y largo con 1200 archivos (aplanado)
          ...archive,                                                    // El resultado final será un archiveList con 1200 proyectos.
          name: `${archive.name}`,
          id: i * archives.length + j,                                   // Se crea un id único para cada archivo.
        }))
      );
    setArchiveList(initialSet);                                          // Se actualiza el estado del array.
  }, []);

  // Configuración de animaciones y loop infinito de scroll con GSAP
  useEffect(() => {
    if (!containerRef.current || archiveList.length === 0) return;

    // Se aísla el contexto de GSAP al contenedor para fácil limpieza y evitar fugas de memoria
    const ctx = gsap.context(() => {
      // Trigger que gestiona el bucle de scroll continuo (efecto sin fin)
      ScrollTrigger.create({
        scroller: containerRef.current, // Contenedor que hace el scroll
        start: 0,                       // Límite superior del contenedor
        end: "max",                     // Límite inferior total del scroll
        // Al sobrepasar el final hacia abajo, teletransporta el scroll 1px después del inicio
        onLeave: (self) => {
          self.scroll(1);
          ScrollTrigger.update();
        },
        // Al sobrepasar el inicio hacia arriba, teletransporta el scroll justo antes del final
        onLeaveBack: (self) => {
          self.scroll(ScrollTrigger.maxScroll(containerRef.current as HTMLElement) - 1);
          ScrollTrigger.update();
        }
      });

      // Selecciona todos los elementos de la lista dentro del contexto del contenedor
      const archiveItems = gsap.utils.toArray<HTMLElement>(".archive-item");
      archiveItems.forEach((item) => {
        // Efecto visual vinculado a la posición de cada item al cruzar el viewport del contenedor
        gsap.to(item, {
          repeat: 1,
          yoyo: true,
          ease: "none",
          scrollTrigger: {
            scroller: containerRef.current, // Usa el mismo contenedor como referencia de scroll
            trigger: item,                  // Elemento que dispara su propia animación
            start: "center bottom",         // Inicia cuando el centro del item entra por abajo
            end: "center top",              // Finaliza cuando el centro del item sale por arriba
            scrub: true,                    // Sincroniza suavemente el progreso de la animación con el scroll
          }
        });
      });
    }, containerRef);

    // Limpieza de triggers y animaciones al desmontar o actualizar el componente
    return () => ctx.revert();
  }, [archiveList]);

  return (
    <ReactLenis root>
      <div
        className="archive relative h-full w-full"
        ref={containerRef}
        style={{ height: "100vh", top: "-25em" }}
      >
        <div className="container relative">
          <div className="pointer-events-none fixed left-0 top-0 h-screen w-screen bg-gradient-to-b from-bg via-transparent to-bg" />
          <Preview />

          {archiveList.map((archive) => (
            <div className="flex h-[100px] w-full" key={archive.id}>
              <div className="archive-item h-full w-full max-[900px]:w-full">
                <div className="flex items-center justify-between">
                  <h1 id="archive-name">{archive.name}</h1>

                  <p id="archive-category" className="text-right">
                    {archive.category}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </ReactLenis>
  );
};

export default Archive;
