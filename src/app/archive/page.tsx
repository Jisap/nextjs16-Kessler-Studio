"use client";

import Preview from "@/components/preview/Preview";

/**
 * TODO — build the infinite-scroll archive list here.
 *
 * - Import `archives` from "@/data/archive".
 * - Same duplicate-list + GSAP/ScrollTrigger looping technique as the
 *   Projects page, but as a vertical list of name/category rows instead
 *   of a thumbnail grid.
 * - Render <Preview /> (already wired up below) so scrolling swaps the
 *   floating preview image behind the list.
 */

const Archive = () => {
  return (
    <div className="relative h-full w-full">
      <Preview />

      {/* TODO: infinite-scroll archive list */}
    </div>
  );
};

export default Archive;
