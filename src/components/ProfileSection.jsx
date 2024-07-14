"use client";
import Image from "next/image";
import React from "react";
import BoundaryFade from "@/components/BoundaryFade";
import { SOCIALS } from "@/utils/constants/constants";

const ProfileSection = () => {
  return (
    <div className="w-full fixed top-0 left-0 max-w-[450px] bg-background lg:flex min-h-dvh lg:relative">
      <div className="absolute top-0 left-0 w-full h-1/2 ">
        <Image src="/bgGroup.svg" layout="fill" alt="bg" />
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-background" />
        <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-background/50" />
      </div>
      <div className="absolute flex flex-col items-center top-0 left-0 w-full h-full pt-16 px-[15%]">
        <div className="w-3/5 mb-10 aspect-square relative rounded-full border-[3px] border-white/20 shadow-profile">
          <Image alt="photo" src={"/photoCircle.png"} layout="fill" />
        </div>
        <h1 className="text-3xl mb-4 text-center w-full font-livvic text-textPrimary font-semibold">
          Abhishek Chorotiya
        </h1>
        <h2 className="text-xl mb-10 text-center w-full font-livvic text-textPrimary font-semibold">
          {"<FrontendEngineer/>"}
        </h2>
        <div className="w-full flex justify-center gap-5 flex-wrap">
          {SOCIALS.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className={`min-w-10 relative overflow-hidden border-2 border-black/10 shadow-profile aspect-square rounded-full`}
            >
              <Image
                src={social.icon || ""}
                alt="linkedin"
                className={`${social.name === "LinkedIn" && "scale-125"}`}
                layout="fill"
              />
            </a>
          ))}
        </div>
        <div className="w-full h-full flex-1 pt-10 gap-4 flex justify-center relative">
          <button className="h-fit px-5 border-2 text-sm border-textSecondary/20 py-2 rounded-full text-textSecondary">
            Resume
          </button>
          <button
            onClick={() => {
              document?.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-5 h-fit border-2 text-sm border-textSecondary/20 py-2 rounded-full text-textSecondary"
          >
            Hire Me!
          </button>
        </div>
      </div>
      <BoundaryFade width={"20%"} />
    </div>
  );
};

export default ProfileSection;
