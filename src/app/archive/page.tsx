"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { archives } from "@/data/archive";
import Preview from "@/components/preview/Preview";

gsap.registerPlugin(ScrollTrigger);

interface ArchiveListItem {
  id: number;
  name: string;
  category: string;
}


const Archive = () => {

  const [archiveList, setArchiveList] = useState<ArchiveListItem[]>([]); // Guarda los nombres de los proyectos en un array. Se usa para crear una lista infinita de proyectos.
  const constainerRef = useRef<HTMLDivElement>(null);                    // Referencia al contenedor de la lista de proyectos.

  useEffect(() => {
    const initialSet: ArchiveListItem[] = Array(120)                     // Se crea un array de 120 elementos.
      .fill(null)                                                        // Se llena con null.
      .flatMap((_, i) =>                                                 // Por cada uno de esos 120 elementos, toma el array original 
        archives.map((archive, j) => ({                                  // y lo copia completo para crear un array único y largo con 120 archivos (aplanado)
          ...archive,                                                    // El resultado final será un archiveList con 1200 proyectos.
          name: `${archive.name}`,
          id: i * archives.length + j,                                   // Se crea un id único para cada archivo.
        }))
      )
    setArchiveList(initialSet)                                         // Se actualiza el estado del array.
  }, [])

  return (
    <div className="relative h-full w-full">
      <Preview />

      {/* TODO: infinite-scroll archive list */}
    </div>
  );
};

export default Archive;
