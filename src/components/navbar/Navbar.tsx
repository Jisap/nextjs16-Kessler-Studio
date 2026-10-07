"use client";

import { articleItems, navLinks } from "@/data/nav";
import Image from "next/image";
import { useEffect } from "react";
import TransitionLink from "../transition/TransitionLink";


const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-[2] flex w-full justify-between p-[1.5em] max-[900px]:p-[1em]">
      {/* TODO: primary nav links */}

      {/* TODO: collaborator flyout */}
    </div>
  );
};

export default Navbar;
