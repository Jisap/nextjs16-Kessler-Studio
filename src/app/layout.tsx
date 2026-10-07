import type { Metadata } from "next";

import "./globals.css";
import { fontDisplay, fontBody } from "./fonts";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import RouteTransition from "@/components/transition/RouteTransition";

// TODO: fill in your own site metadata (title, description, OpenGraph,
// metadataBase URL) once you've picked a brand for this build.
export const metadata: Metadata = {
  title: "Site Title",
  description: "Site description goes here.",
  icons: {
    icon: "/site-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <RouteTransition>
          <Navbar />
          {children}
          <Footer />
        </RouteTransition>
      </body>
    </html>
  );
}
