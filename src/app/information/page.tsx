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
    <ReactLenis>
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
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Information;
