"use client";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky z-50 overflow-x-auto lg:overflow-visible bg-background lg:px-[20%] px-5  [scrollbar-width:none] font-semibold flex gap-5 text-textSecondary items-center mt-5 lg:mt-10 top-0 left-0 w-full min-h-16">
      <span
        onClick={() => {
          document?.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        className="cursor-pointer min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full"
      >
        About
      </span>
      <span
        onClick={() => {
          document?.getElementById("skills")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        className="min-w-fit cursor-pointer py-2 px-6 text-sm bg-tabBg rounded-full"
      >
        Skills
      </span>
      <span
        onClick={() => {
          document?.getElementById("experience")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        className="min-w-fit cursor-pointer py-2 px-6 text-sm bg-tabBg rounded-full"
      >
        Experience
      </span>
      <span
        onClick={() => {
          document?.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="min-w-fit cursor-pointer py-2 px-6 text-sm bg-tabBg rounded-full"
      >
        Projects
      </span>
      <a
        href="https://drive.google.com/file/d/1h150C_6F7fOyt3Sn8mF2Fn-8x1Tqkl5B/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="min-w-fit cursor-pointer py-2 px-6 text-sm bg-tabBg rounded-full"
      >
        Resume
      </a>
      <span
        onClick={() => {
          document?.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="min-w-fit cursor-pointer relative overflow-hidden h-fit py-2 px-6 text-sm bg-textPrimary text-white rounded-full"
      >
        Hire Me!
        <span className="shine-effect" />
      </span>
      <div className="absolute hidden lg:flex top-full min-h-12 w-full left-0 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute hidden lg:flex top-full min-h-12 w-full left-0 bg-gradient-to-b from-background to-transparent"></div>
    </header>
  );
};
export default Navbar;
