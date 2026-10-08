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
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default SampleProject;
