import type { Metadata } from "next";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import TransitionLink from "@/components/transition/TransitionLink";

export const metadata: Metadata = {
  title: "Sample Project",
};



const SampleProject = () => {
  return (
    <ReactLenis root>
      <div className="project h-full w-full">
        <div className="container">
          <div className="relative h-[75vh] w-full">
            <Image
              src="/images/sample-project/hero-1.jpg"
              alt="Undertow project hero"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex w-full gap-[1em] p-[1.5em] max-[900px]:flex-col">
            <div className="flex flex-1 gap-`1em] max-[900px]:flex-col">
              <div className="flex-1">
                <p>Client &#x2192: Halo Record</p>
              </div>

              <div className="flex-1">
                <p>Studio &#x2192; Nadia Kessler Studio</p>
              </div>
            </div>

            <div className="flex flex-1 gap-[1em] max-[900px]:flex-col">
              <div className="flex-1">
                <p className="text-right max-[900px]:text-left">
                  Year &#x2192; 2026
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-[1em] px-[1.5em] py-[8em] max-[900px]:flex-col">
            <div className="flex-1">
              <h1>
                Undertow: <br />
                Halo Records x Nadia Kessler
              </h1>
            </div>

            <div className="flex-1">
              <p className="text-[22px]">
                A motion identity and title sequence built for Halo Records&rsquo;flagship release,
                translating the record&rsquo;s low-end, slow-building sound into a moving mark.
              </p>

              <div className="my-[2em] flex justify-between gap-[1em] max-[900px]:flex-col">
                <div className="flex gap-[1em]">
                  <span>Motion Identity</span>
                  <span>Sound Design</span>
                  <span>Typography</span>
                  <span>Animation</span>
                </div>

                <div className="flex gap-[1em]">
                  <span>&#x2192; Live Demo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[75vh] w-full">
            <Image
              src="/images/sample-project/hero-2.jpg"
              alt="Undertow campaing frame"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex w-full gap-[1em] px-[1.5em] py-[8em] max-[900px]:flex-col">
            <div className="flex-1" />

            <div className="flex-1">
              <p className="text-[22px]">
                The sonic identity extended into Halo&rsquo;s season-opening
                boradcast, where motion and sound were designed together from
                the first frame.
              </p>
            </div>
          </div>

          <div className="flex w-full gap-[1.5em] px-[1.5em] max-[900px]:flex-col">
            <div className="w-full pb-[1.5em]" style={{ aspectRatio: "5/4" }}>
              <Image
                src="/images/sample-project/detail-1.jpg"
                alt="undertow detail frame one"
                width={1500}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-full pb-[1.5em]" style={{ aspectRatio: "5/4" }}>
              <Image
                src="/images/sample-project/detail-2.jpg"
                alt="undertow detail frame two"
                width={1500}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-full gap-[1.5em] px-[1.5em] max-[900px]:flex-col">
            <div className="w-full pb-[1.5em]" style={{ aspectRatio: "5/4" }}>
              <Image
                src="/images/sample-project/detail-3.jpg"
                alt="undertow detail frame three"
                width={1500}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-full pb-[1.5em]" style={{ aspectRatio: "5/4" }}>
              <Image
                src="/images/sample-project/detail-4.jpg"
                alt="undertow detail frame four"
                width={1500}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative h-screen w-full">
            <Image
              src="/images/sample-project/hero-3.jpg"
              alt="undertow closing frame"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex h-screen w-full items-center justify-center">
            <TransitionLink href="/projects">
              <h1>Next Project</h1>
            </TransitionLink>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default SampleProject;
