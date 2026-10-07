"use client";

import { useEffect, useLayoutEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ReactLenis from "lenis/react";
import { ScrollTrigger } from "gsap/all";
import { projects } from "@/data/projects";
import TransitionLink from "@/components/transition/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

interface ProjectListItem {
  id: number;
  name: string;
  category: string;
  img: string;
}

const Projects = () => {

  const [projectList, setProjectList] = useState<ProjectListItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialSet: ProjectListItem[] = Array(30)    // Se crea un array de 30 elementos.
      .fill(null)                                      // Se llena con null.
      .flatMap((_, i) =>                               // Por cada elemento del array, se mapea (itera) sobre el array de proyectos.
        projects.map((project, j) => ({                // Pero la iteracion es con flatmap lo que permite aplanar el array y crear uno solo -> se consigue un único y largo array lineal con 300 proyectos uno detrás de otro:
          ...project,                                  // Se copia el proyecto.
          name: `${project.name}`,                     // Se copia el nombre del proyecto.
          id: i * projects.length + j                  // Se crea un id único para cada proyecto.
        }))
      )

    setProjectList(initialSet)
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current || projectList.length === 0) return;

    const ctx = gsap.context(() => {
      const projectItems =
        gsap.utils.toArray<HTMLElement>(".project-item");

      projectItems.forEach((item) => {
        // Timeline con scrub: 0.15 -> 1 -> 0.15 mientras cruza el viewport.
        // Reproduce la intención original del `repeat: 1, yoyo: true`
        // pero compatible con scrub (repeat + scrub se ignoran entre sí).
        const tl = gsap.timeline({
          scrollTrigger: {
            // Sin `scroller`: el scroll real lo lleva `window`
            // (<ReactLenis root />). Pasar el div como scroller rompía
            // los cálculos porque ese div no tiene overflow: scroll.
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        tl.fromTo(
          item,
          { opacity: 0.15 },
          { opacity: 1, ease: "none", duration: 0.5 }
        ).to(item, { opacity: 0.15, ease: "none", duration: 0.5 });
      });

      // Recalcula tras montar + cuando cargan las imágenes de next/image.
      ScrollTrigger.refresh();
    }, containerRef);

    // Limpieza: evita triggers duplicados en StrictMode / re-mount.
    return () => ctx.revert();
  }, [projectList])

  return (
    <ReactLenis root>
      <div
        className="projects w-full px-[1.5em] py-[8em] max-[900px]:px-[1em] max-[900px]:py-[12em]"
        ref={containerRef}
        style={{ height: "100vh" }}
      >
        <div className="container">
          {projectList.map((project, index) => (
            <div
              className={`
                flex w-full py-[1.5em] max-[900px]:my-[4em]
                ${index % 2 === 1 ? "justify-end" : "justify-start"}
              `}
              style={{ height: 600 }}
              key={project.id}
            >
              <div className="project-item relative w-[36%] duration-300 hover:duration-150 max-[900px]:w-full">
                <div className="project-img h-full w-full overflow-hidden rounded-[0.5em]">
                  <TransitionLink href="/sample-project">
                    <Image
                      src={project.img}
                      alt={`${project.name}: ${project.category}`}
                      width={1600}
                      height={1200}
                      className="h-full w-full object-cover"
                    />
                  </TransitionLink>
                </div>

                <div className="flex justify-between px-[0.5em] py-[0.75em]">
                  <p id="project-name" className="text-[16px] font-bold">
                    &rarr; {project.name}
                  </p>

                  <p id="project-category" className="text-[16px]">
                    {project.category}
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

export default Projects;
