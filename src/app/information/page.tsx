import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information",
};

/**
 * TODO — build the about/information page here.
 *
 * - Import `services`, `campaigns`, `recognition`, `journey`,
 *   `collaborations`, `exhibitions`, and `press` from "@/data/info".
 * - Render the bio as one large heading-sized paragraph.
 * - Map each data list into its own labeled section with a `.divider`
 *   under the heading (see the `.divider` utility already in globals.css).
 */

const Information = () => {
  return (
    <div className="px-[1.5em] py-[12em]">
      {/* TODO: bio */}

      {/* TODO: services / campaigns / contact */}

      {/* TODO: recognition / journey / collaborations */}

      {/* TODO: exhibitions / press */}
    </div>
  );
};

export default Information;
