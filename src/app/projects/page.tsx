"use client";

/**
 * TODO — build the infinite-scroll project grid here.
 *
 * - Import `projects` from "@/data/projects".
 * - Duplicate the list many times over (e.g. 30x) into local state so
 *   scrolling never runs out of content.
 * - Use `lenis/react`'s <ReactLenis root> for smooth scrolling.
 * - Register GSAP + ScrollTrigger, and:
 *   - Use `ScrollTrigger.create` with `onLeave`/`onLeaveBack` on the
 *     scroll container to loop the scroll position seamlessly.
 *   - `gsap.to()` each `.project-item` with a scrub-linked ScrollTrigger
 *     (start: "center bottom", end: "center top") so items animate in
 *     and back out as they cross the viewport.
 * - Alternate each row's justify-content (left/right) for the zig-zag
 *   layout, and link each thumbnail to "/sample-project" via
 *   <TransitionLink>.
 */

const Projects = () => {
  return (
    <div className="w-full py-[10em] max-[900px]:py-[15em]">
      {/* TODO: infinite-scroll project grid */}
    </div>
  );
};

export default Projects;
