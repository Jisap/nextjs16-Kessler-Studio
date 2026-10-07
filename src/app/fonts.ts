import localFont from "next/font/local";

// Big Shoulders — condensed display grotesk, used for headlines/hero type.
// Outfit — neutral geometric sans, used for body copy and UI labels.
// Both are SIL Open Font License fonts bundled locally so the build has no
// external network dependency (see src/assets/fonts/*-OFL.txt for licenses).

export const fontDisplay = localFont({
  src: [
    {
      path: "../assets/fonts/BigShoulders-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/BigShoulders-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = localFont({
  src: [
    {
      path: "../assets/fonts/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});
