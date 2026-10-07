"use client";

/**
 * TODO — build the scroll-driven image preview here (used on the Archive page).
 *
 * - Import `previewImgs` from "@/data/archive".
 * - Track `window.scrollY` on a scroll listener and pick an image index
 *   from it (e.g. `Math.floor(position / buffer) % previewImgs.length`).
 * - Swap the displayed image via state whenever the index changes.
 * - Play a short "tick" sound (see /public/audio/tick.wav) on each swap.
 */

const Preview = () => {
  return (
    <div className="fixed left-1/2 top-1/2 z-[100] h-[40%] w-[35%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[0.5em] max-[900px]:z-[-1] max-[900px]:h-[35%] max-[900px]:w-[75%] max-[900px]:opacity-75">
      {/* TODO: scroll-driven preview image */}
    </div>
  );
};

export default Preview;
