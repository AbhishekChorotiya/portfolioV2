import { SKILLS } from "@/utils/constants/constants";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import BoundaryFade from "@/components/BoundaryFade";
import ProfileSection from "@/components/ProfileSection";
import { ExternalLink, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import EmblaCarousel from "./Carausel";
import { EmblaOptionsType } from "embla-carousel";
import AiChat from "./AiChat";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    name: "CoDevTogether",
    images: ["/codev1.avif", "/codev2.avif", "/codev3.avif", "/codev4.avif"],
    description:
      "Create rooms to code, compile, chat, and track user activity in real-time. Perfect for seamless collaborative coding and discussions.",
    link: "https://codev.chorotiya.com/",
    github: "https://github.com/AbhishekChorotiya/coDevTogether",
    technologies: [
      "ReactJS",
      "Tailwind",
      "Socket.io",
      "NodeJS",
      "Express",
      "One Compiler",
    ],
  },
  {
    name: "AI Portfolio Website",
    images: ["/p1.avif", "/p2.avif", "/p3.avif", "/p4.avif"],
    description:
      "Showcasing my projects, skills, social media profiles, and experience with a portfolio website deployed on Vercel. Incorporated AI chat and text-to-speech capabilities using Vertex AI and Google Gemini.",
    link: "https://abhishek.chorotiya.com/",
    github: "https://github.com/AbhishekChorotiya/portfolioV2",
    technologies: [
      "NextJS",
      "Tailwind",
      "AOS",
      "Vercel",
      "Gemini",
      "Vertex AI",
    ],
  },
  {
    name: "Wifi Classromm Attendance System",
    images: ["/a1.avif", "/a2.avif", "/a3.avif", "/a4.avif", "/a5.avif"],
    description:
      "Facilitated faculty to take attendance of students using a mobile app, with admin functionality for course registration and student access to attendance records.",
    github: "https://github.com/AbhishekChorotiya/AttendanceApp",
    technologies: [
      "React Native",
      "React",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "Multer",
      "xlsx",
    ],
  },
];

const LandingPage = () => {
  return (
    <main className="flex relative lg:flex-row flex-col lg:h-screen w-screen bg-background lg:justify-center overflow-y-scroll lg:overflow-hidden">
      <ProfileSection />
      <div className="w-full bg-background rounded-t-xl lg:rounded-none shadow-cardTop lg:shadow-none mt-[calc(100vh-7rem)] lg:mt-0 min-h-full flex flex-col relative [scrollbar-width:none] overflow-x-hidden">
        <div className="w-full flex flex-col lg:overflow-y-scroll scroll-smooth overflow-x-hidden">
          <Navbar />
          <section
            id="about"
            className="flex w-full h-fit justify-center px-8 lg:px-[16%]"
          >
            <p className="text-center mt-10 mb-5 w-full text-sm text-balance font-livvic  text-textSecondary leading-6 tracking-wider font-semibold">
              {
                "I'm Abhishek Chorotiya, a B.Tech graduate from IIIT Kota. Proficient in JavaScript, Next.js, React.js, and Node.js, with expertise in frontend and full-stack development. I'm passionate about technology and innovation, thriving on problem-solving and always eager to collaborate on exciting projects. Let's connect and explore opportunities in the ever-evolving tech world."
              }
            </p>
          </section>
          <section
            id="skills"
            className="flex flex-col w-full h-fit justify-center"
          >
            <Heading title="Skills" />
            <div className="relative lg:hidden flex gap-10 flex-col max-w-full my-5 overflow-hidden">
              <Marquee>
                {SKILLS.slice(0, Math.floor(SKILLS.length / 2)).map(
                  (skill, i) => (
                    <SkillImage
                      key={i}
                      alt={skill.name}
                      src={skill.icon || ""}
                      bg={skill.bg}
                    />
                  )
                )}
              </Marquee>
              <Marquee direction="right">
                {SKILLS.slice(Math.floor(SKILLS.length / 2)).map((skill, i) => (
                  <SkillImage
                    bg={skill.bg}
                    key={i}
                    alt={skill.name}
                    src={skill.icon || ""}
                  />
                ))}
              </Marquee>
              <div
                className="absolute flex lg:hidden z-50 top-0 left-0 min-h-full bg-gradient-to-r from-background  to-transparent"
                style={{ minWidth: "10%" }}
              />
              <div
                className="absolute flex lg:hidden z-50 top-0 right-0 min-h-full bg-gradient-to-l from-background  to-transparent"
                style={{ minWidth: "10%" }}
              />
            </div>
            <div className="relative hidden lg:flex gap-10 flex-col max-w-full my-5 overflow-y-hidden">
              <Marquee className="overflow-hidden">
                {SKILLS.map((skill, i) => (
                  <SkillImage
                    bg={skill.bg}
                    key={i}
                    alt={skill.name}
                    src={skill.icon || ""}
                  />
                ))}
              </Marquee>
            </div>
          </section>
          <section
            id="experience"
            className="flex flex-col w-full h-fit justify-center"
          >
            <Heading title="Experience" />
            <div className="flex w-full  relative">
              <div className="w-full h-full z-10 top-0 lg:px-[12%] px-6 left-0 gap-2 flex flex-col pb-10 pt-2 lg:py-10">
                <div className="flex flex-col">
                  <h2 className="text-lg mb-1 text-textSecondary">
                    Feb 2024 - Present
                  </h2>
                  <h1 className="text-xl text-textPrimary font-livvic  font-semibold">
                    Frontend Engineer
                  </h1>
                  <a
                    href="https://openinapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg flex gap-2 items-center text-textPrimary font-livvic font-semibold"
                  >
                    OpeninApp | Listed Inc.
                    <ExternalLink
                      className="text-textPrimary h-4"
                      strokeWidth={2.5}
                    />
                  </a>
                </div>
                <div className="flex flex-col my-3 text-textSecondary text-base w-full">
                  <p>Developed Frontend for the Job-Board and Vibe Product</p>
                  <p>
                    Collaborated with UI/UI designers to translate wireframes
                    and mockups into interactive web pages
                  </p>
                  <p>
                    Fixed UI bugs and Optimized website’s performance to enhance
                    user experience across different browsers and devices.
                  </p>
                </div>
                <pre className="text-textPrimary text-wrap text-sm font-semibold">
                  NextJS • ReactJS • Tailwind CSS • TypeScript • ReactQuery •
                  Jotai
                </pre>
              </div>
            </div>
          </section>
          <section
            id="projects"
            className="flex flex-col w-full mb-4 h-fit items-center relative justify-center"
          >
            <Heading title="Projects" />
            <div className=" flex flex-col w-full pt-12">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </section>
          <section className="flex flex-col w-full h-fit justify-center mb-8">
            <Heading title="Education" />
            <div className=" flex flex-col h-fit lg:px-[12%] w-full">
              <div className="w-full justify-center items-center flex lg:flex-row flex-col gap-8 h-full relative">
                <div className="lg:h-full lg:w-auto w-28 aspect-square relative">
                  <Image
                    alt="iiitklogo"
                    src={"/iiitklogo.avif"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex  lg:text-left text-center text-textPrimary text-balance flex-col">
                  <h1 className="text-xl font-semibold">
                    Indian Institute of Information Technology, Kota
                  </h1>
                  <h2 className="text-lg">
                    B.Tech | Electronics and Communication Engineering
                  </h2>
                  <h2>2020 - 2024</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full text-textPrimary h-fit justify-center mb-10">
            <Heading title="Get in touch" />
            <div className="flex  flex-col h-fit mt-5 px-6 lg:px-[12%] w-full">
              <div className="w-full flex flex-col lg:flex-row h-full ">
                <div className="w-full gap-5 flex flex-col items-center h-full pt-2 lg:pt-10 p-6">
                  <h1 className="text-lg font-livvi text-center text-textPrimary font-semibold">
                    {"Let's Build Greatest Apps Together"}
                  </h1>
                  <div className="flex items-center lg:items-start flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <Phone className="w-5 h-5" />
                      <h2 className="font-semibold">+91 8003132368</h2>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Mail className="w-5 h-5" />
                      <h2 className="font-semibold">code.abhi8678@gmail.com</h2>
                    </div>
                    <div className="hidden lg:flex gap-4 items-center">
                      <Linkedin className="w-5 h-5" />
                      <h2 className="font-semibold">
                        /abhishek-chorotiya-7a1a0a222
                      </h2>
                    </div>
                    <div className="hidden lg:flex gap-4 items-center">
                      <Instagram className="w-5 h-5" />
                      <h2 className="font-semibold">@abhishekchorotiya</h2>
                    </div>
                  </div>
                </div>
                <Contact />
              </div>
            </div>
          </section>
          <div className="min-w-full flex-col px-6 min-h-fit flex mt-5 mb-20 justify-center">
            <p className="text-base text-balance text-center leading-6 tracking-wide font-livvic  text-textPrimary font-semibold">
              Developed with ❤️ and the magic of Next.js and Tailwind CSS, by
              yours truly.
            </p>
            <p className="text-sm text-balance text-center leading-6 tracking-wide font-livvic  text-textPrimary font-semibold">
              Powered by Gemini and Vertex AI
            </p>
          </div>
        </div>
        <BoundaryFade dark width={"12%"} />
      </div>
      <AiChat />
      <Toaster />
    </main>
  );
};

export default LandingPage;

const Heading = ({ title = "" }) => {
  return (
    <div className="flex gap-5 w-full px-6 lg:px-[20%] items-center lg:justify-center py-14">
      {/* <span className="w-20 h-[1px] bg-gradient-to-l from-textSecondary to-transparent" /> */}
      <h1 className="text-2xl text-nowrap font-livvic text-textPrimary font-semibold after:w-20">
        {title}
      </h1>
      <span className="w-1/2 lg:hidden h-[1px] bg-gradient-to-r from-textPrimary to-transparent" />
    </div>
  );
};

const SkillImage = ({ src = "/nextjs.svg", alt = "", bg = false }) => (
  <div className="p-4">
    <div
      className={`min-w-20 min-h-20 lg:min-w-24 lg:min-h-24 grayscale-[20%] opacity-90 hover:scale-110 transition-all duration-200 hover:opacity-100 hover:grayscale-0 mx-6 rounded-full relative ${
        bg && "bg-[#F7F7FC]"
      }`}
    >
      <Image alt={alt} src={src} layout="fill" />
    </div>
  </div>
);
