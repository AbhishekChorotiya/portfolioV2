import { SKILLS, SOCIALS } from "@/utils/constants/constants";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const landingPage = () => {
  return (
    <main className="flex lg:flex-row flex-col h-screen w-screen bg-background lg:justify-center overflow-y-scroll lg:overflow-hidden">
      <div className="w-full max-w-[450px] bg-background flex min-h-full relative">
        <div className="absolute top-0 left-0 w-full h-1/2 ">
          <Image src="/bgGroup.svg" layout="fill" alt="bg" />
          <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-background" />
          <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-background/50" />
        </div>
        <div className="absolute flex flex-col items-center top-0 left-0 w-full h-full pt-16 px-[15%]">
          <div className="w-3/5 mb-10 aspect-square relative rounded-full border-[3px] border-white/20 shadow-profile">
            <Image alt="photo" src={"/photoCircle.png"} layout="fill" />
          </div>
          <h1 className="text-3xl mb-10 text-center w-full font-livvic font-semibold">
            Abhishek Chorotiya
          </h1>
          <div className="w-full flex justify-center gap-5 flex-wrap">
            {SOCIALS.map((social, i) => (
              <div
                key={i}
                className={`min-w-10 relative overflow-hidden border-2 border-black/10 shadow-profile aspect-square rounded-full`}
              >
                <Image
                  src={social.icon || ""}
                  alt="linkedin"
                  className={`${social.name === "LinkedIn" && "scale-125"}`}
                  layout="fill"
                />
              </div>
            ))}
          </div>
          <div className="w-full h-20 flex-1 flex items-center justify-center">
            <button className="flex items-center justify-center font-livvic text-xl bg-tabBg rounded-full px-10 py-2 border-2 border-black/10 text-textSecondary">
              Resume
            </button>
          </div>
        </div>
        <BoundryFade width={"20%"} />
      </div>
      <div className="w-full min-h-full gap-5 flex flex-col relative [scrollbar-width:none] overflow-x-hidden">
        <div className="w-full flex flex-col gap-5 lg:overflow-y-scroll overflow-x-hidden">
          <Navbar />
          <section className="flex w-full h-fit justify-center px-[16%]">
            <p className="text-center mt-2 w-full text-textSecondary text-sm text-balance font-livvic leading-6 tracking-wide font-semibold">
              {
                "I'm Abhishek Chorotiya, a B.Tech graduate from IIIT Kota. Proficient in JavaScript, Next.js, React.js, and Node.js, with expertise in frontend and full-stack development. I'm passionate about technology and innovation, thriving on problem-solving and always eager to collaborate on exciting projects. Let's connect and explore opportunities in the ever-evolving tech world."
              }
            </p>
          </section>
          <section className="flex flex-col w-full h-fit justify-center">
            <Heading title="Skills" />
            <div className="relative flex max-w-full my-5 overflow-hidden">
              <Marquee>
                {SKILLS.map((skill, i) => (
                  <SkillImage key={i} alt={skill.name} src={skill.icon || ""} />
                ))}
              </Marquee>
            </div>
          </section>
          <section className="flex w-full h-fit justify-center px-[16%]">
            <Heading title="Projects" />
          </section>
        </div>
        <BoundryFade dark width={"12%"} />
      </div>
    </main>
  );
};

export default landingPage;

const BoundryFade = ({
  width = "5rem",
  dark = false,
}: {
  width?: number | string;
  dark?: boolean;
}) => {
  return (
    <>
      <div
        className="absolute hidden lg:flex z-50 top-0 left-0 min-h-full bg-gradient-to-r from-background  to-transparent"
        style={{ minWidth: width }}
      />
      {dark && (
        <div
          className="absolute hidden lg:flex z-50 top-0 left-0 min-h-full bg-gradient-to-r from-background  to-transparent"
          style={{ minWidth: width }}
        />
      )}
      <div
        className="absolute hidden lg:flex z-50 top-0 right-0 min-h-full bg-gradient-to-l from-background to-transparent"
        style={{ minWidth: width }}
      />
      {dark && (
        <div
          className="absolute hidden lg:flex z-50 top-0 right-0 min-h-full bg-gradient-to-l from-background  to-transparent"
          style={{ minWidth: width }}
        />
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <header className="sticky bg-background lg:px-[20%] px-5 overflow-x-scroll  [scrollbar-width:none] font-semibold flex gap-5 text-textSecondary items-center mt-10 top-0 left-0 w-full min-h-16">
      <span className="min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full">
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
      <span className="min-w-fit py-2 px-6 text-sm bg-tabBg rounded-full">
        Hire Me!
      </span>
    </header>
  );
};

const Heading = ({ title = "" }) => {
  return (
    <div className="flex gap-5 w-full justify-center items-center py-10">
      <span className="w-20 h-[1px] bg-gradient-to-l from-textSecondary to-transparent" />
      <h1 className="text-2xl font-livvic font-semibold text-textPrimary after:w-20">
        {title}
      </h1>
      <span className="w-20 h-[1px] bg-gradient-to-r from-textSecondary to-transparent" />
    </div>
  );
};

const SkillImage = ({ src = "/nextjs.svg", alt = "" }) => (
  <div className="min-w-28 min-h-28 mx-6 rounded-full relative">
    <Image alt={alt} src={src} layout="fill" />
  </div>
);
