import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-[2] flex w-full p-[1.5em] max-[900px]:p-[1em]">
      <div className="flex w-full flex-1">
        <div className="flex flex-1  gap-[1.5em]">
          <div className="flex-1">
            <div>
              <Link href="mailTo:hello@nadiaKessler.studio">
                &#x2192; hello@nadiakessler.studio
              </Link>
            </div>

            <div>
              <Link href="mailto:studio@nadiakessler.studio">
                &#x2192; Enquiries
              </Link>
            </div>
          </div>

          <div className="flex-1 max-[900px]:flex max-[900px]:flex-col max-[900px]:items-end">
            <div>
              <Link href="https://instagram.com/nadiakessler.studio" target="_blank">
                &#x2192; Instagram
              </Link>
            </div>

            <div>
              <Link href="mailto:hello@nadiakessler.studio">
                &#x2192; Chat
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-end justify-end max-[900px]:hidden">
        <div>
          <p>
            &copy; Nadia kessler {CURRENT_YEAR}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
