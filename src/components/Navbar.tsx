"use client";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky z-50 bg-background lg:px-[20%] px-5  [scrollbar-width:none] font-semibold flex gap-5 text-textSecondary items-center mt-5 lg:mt-10 top-0 left-0 w-full min-h-16">
      <span
        onClick={() => {
          document?.getElementById("skills")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        className="cursor-pointer min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full"
      >
        Home
      </span>
      <span className="min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full">
        About
      </span>
      <span className="min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full">
        Skills
      </span>
      <span className="min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full">
        Projects
      </span>
      <span className="min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full">
        Resume
      </span>
      <span className="min-w-fit relative overflow-hidden h-fit py-2 px-6 text-sm bg-textPrimary text-white rounded-full">
        Hire Me!
        <span className="shine-effect" />
      </span>
      <div className="absolute hidden lg:flex top-full min-h-12 w-full left-0 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute hidden lg:flex top-full min-h-12 w-full left-0 bg-gradient-to-b from-background to-transparent"></div>
    </header>
  );
};
export default Navbar;
