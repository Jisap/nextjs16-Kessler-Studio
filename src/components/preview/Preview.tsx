"use client";

import { previewImgs } from "@/data/archive";
import Image from "next/image";
import { useEffect, useState } from "react";


const defaultPreviewImage = previewImgs[0] ?? "/images/archive/archive-1.jpg";
const buffer = 100;

const Preview = () => {

  const [previewImg, setPreviewImg] = useState(defaultPreviewImage);

  useEffect(() => {
    const tickSound = new Audio("/audio/tick.wav");

    const handleScroll = () => {
      const position = window.scrollY;
      const index = Math.floor(position / buffer) % previewImgs.length;
      const selectedPreviewImg = previewImgs[index] ?? defaultPreviewImage;

      if (selectedPreviewImg === previewImg) {
        return;
      }

      setPreviewImg(selectedPreviewImg)
      tickSound.play().catch(() => {

      })
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [previewImg])


  return (
    <div className="fixed left-1/2 top-1/2 z-[100] h-[40%] w-[35%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[0.5em] max-[900px]:z-[-1] max-[900px]:h-[35%] max-[900px]:w-[75%] max-[900px]:opacity-75">
      {/* TODO: scroll-driven preview image */}
    </div>
  );
};

export default Preview;
