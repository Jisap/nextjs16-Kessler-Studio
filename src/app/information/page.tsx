import type { Metadata } from "next";
import Link from "next/link";
import { ReactLenis } from "lenis/react";
import {
  services,
  campaigns,
  recognition,
  journey,
  collaborations,
  exhibitions,
  press,
} from '@/data/info';



export const metadata: Metadata = {
  title: "Information",
};



const Information = () => {
  return (
    <ReactLenis root>
      <div className="information">
        <div className="container px-[1.5em] py-[12em]">
          <h1 className="normal-case">
            Nadia kessler is a motion and sound director  working at the itersection of image, rhytm, and brand.
            She partners with labels, culture platforms, and technology companies to build moving,
            sounding worlds that hold attention and mean something once the attention is gone.
          </h1>

          <div className="my-[8em] flex w-full gap-[2em] max-[900px]:flex-col">
            <div className="flex flex-1 gap-[4em] max-[900px]:flex-col max-[900px]:gap-[1em]">
              <div className="flex-2">
                <ul>
                  {services.map((item) => (
                    <li key={item.id} className="text-[22px]">
                      &#x2192; {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <ul>
                  {campaigns.map((item) => (
                    <li key={item.id} className="text-[22px]">
                      &#x2192; {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-[22px]">
                Let&rsquo;s make something that moves and sounds like it means it.
                Whether you have a release, a launch, or just a feeling you want translated into motion,
                I&rsquo;m always glad to talk it throungh.
              </p>

              <div className="mt-[2em]">
                <Link href="mailto:hello@nadiakessler.studio" className="text-[22px]">
                  &#x2192; Let&rsquo;s Connect
                </Link>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-[2em] max-[900px]:flex-col max-[900px]:gap-[4em]">
            <div className="flex flex-1 flex-col gap-[4em]">
              <div>
                <p>Recognition</p>

                <div className="divider" />

                <ul>
                  {recognition.map((item) => (
                    <li key={item.id}>
                      &#x2192; {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <div>
                <p>Collaborations</p>

                <div className="divider"></div>

                <ul>
                  {collaborations.map((item) => (
                    <li key={item.id}>
                      &#x2192; {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-[4em] flex w-full gap-[2em] max-[900px]:flex-col max-[900px]:gap-[4em]">
            <div className="flex-1">
              <p>Exhibitions, Talks, and Workshops</p>

              <div className="divider" />

              <ul>
                {exhibitions.map((item) => (
                  <li key={item.id}>
                    &#x2192; {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <p>Press</p>

              <div className="divider" />

              <ul>
                {press.map((item) => (
                  <li key={item.id}>
                    &#x2192; {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Information;
