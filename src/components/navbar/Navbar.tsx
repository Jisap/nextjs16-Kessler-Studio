"use client";

import { articleItems, navLinks } from "@/data/nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import TransitionLink from "../transition/TransitionLink";
import Link from "next/link";


const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleArticleClick = () => {
    setIsActive(true);
  }

  const handleShowLessClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsActive(false);
  }

  return (
    <div className="fixed left-0 top-0 z-[2] flex w-full justify-between p-[1.5em] max-[900px]:p-[1em]">
      <div className="flex gap-[0.5em] max-[900px]:flex-col">
        {navLinks.map((link) => (
          <div
            key={link.url}
            className="h-max w-full max-[900px]:w-max rounded-[2em] bg-fg/10 backdrop-blur-[10px] transition-[0.3s] hover:bg-fg/20"
          >
            <TransitionLink
              href={link.url}
              className="inline-block px-[1.25em] py-[0.75em]"
            >
              {link.label}
            </TransitionLink>
          </div>
        ))}
      </div>

      <div
        className={`nav-external-links ${isActive ? "active" : ""}`}
        onClick={handleArticleClick}
      >
        {articleItems.map((item, index) => (
          <div
            key={item.url}
            className="article-item"
            id={`article-item-${index + 1}`}
          >
            <Link href={item.url} target="_blank">
              <div className="article-item-img relative">
                <Image
                  src={item.img}
                  alt={`${item.title} thumbnail`}
                  fill
                  sizes="50px"
                />
              </div>

              <div className="article-item-content">
                <p id="article-item-name">{item.title}</p>
                <p id="article-item-copy">{item.subTitle}</p>
              </div>
            </Link>
          </div>
        ))}

        <div className="toggle-articles" onClick={handleShowLessClick}>
          <button className="btn">Show Less</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
