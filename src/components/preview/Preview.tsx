"use client";

import { previewImgs } from "@/data/archive";
import Image from "next/image";
import { useEffect, useState } from "react";


const defaultPreviewImage = previewImgs[0] ?? "/images/archive/archive-1.jpg"; // Define la imagen que se mostrará si el array previewImgs está vacío.
const buffer = 100;  // Es el "paso" o intervalo de scroll. Significa que la imagen cambiará cada 100 píxeles que el usuario desplace hacia abajo o hacia arriba.                                                              

const Preview = () => {

  const [previewImg, setPreviewImg] = useState(defaultPreviewImage);           // Guarda la ruta de la imagen que se está mostrando actualmente en la pantalla. Inicia con la imagen por defecto.      

  useEffect(() => {
    const tickSound = new Audio("/audio/tick.wav");                            // Crea una instancia de un sonido de "tic" que se reproducirá cada vez que cambie la imagen.

    const handleScroll = () => {
      const position = window.scrollY;                                         // Obtiene la posición actual de scroll vertical (cuántos píxeles se ha desplazado el usuario). 

      // Math.floor(position / buffer): Divide la posición actual entre 100 
      // y redondea hacia abajo. Esto crea "bloques" de 100px. 
      // (Ej: si estás en 250px, 250/100 = 2.5, redondeado es 2).

      // % previewImgs.length: El operador módulo asegura que el índice nunca
      // supere el tamaño del array. Si hay 5 imágenes y el índice llega a 6, 
      // vuelve a 0. Crea un bucle infinito de imágenes. 
      const index = Math.floor(position / buffer) % previewImgs.length;        // Calcula qué imagen mostrar según el scroll. 

      const selectedPreviewImg = previewImgs[index] ?? defaultPreviewImage;    // Selecciona la imagen del array según el índice calculado.

      if (selectedPreviewImg === previewImg) {                                 // Compara la imagen seleccionada con la que se está mostrando actualmente. Si son iguales, no hace nada.
        return;
      }

      setPreviewImg(selectedPreviewImg)                                        // Actualiza la imagen que se muestra en la pantalla.
      tickSound.play().catch(() => {                                           // Reproduce el sonido de "tic" y captura cualquier error que pueda ocurrir al intentar reproducirlo (por ejemplo, si el usuario no ha interactuado con la página, el navegador puede bloquear la reproducción de sonido automático).

      })
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [previewImg])


  return (
    <div className="fixed left-1/2 top-1/2 z-[100] h-[40%] w-[35%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[0.5em] max-[900px]:z-[-1] max-[900px]:h-[35%] max-[900px]:w-[75%] max-[900px]:opacity-75">
      <Image
        src={previewImg}
        alt="Currently selected archive frame"
        fill
        sizes="35vw"
        className="object-cover"
      />
    </div>
  );
};

export default Preview;
