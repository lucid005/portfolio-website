"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ModeToggle } from "@/components/ModeToggle";
import { useTheme } from "next-themes";
import { education, experience } from "@/data/MyData";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "@/components/Footer";
import { resources } from "@/data/NavData";
import Link from "next/link";

export default function About() {
  const { theme } = useTheme();

  const [text] = useTypewriter({
    words: ["Developer", "Student"],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 100,
  });

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="hidden xl:flex justify-end w-full">
        <ModeToggle />
      </div>
      <div className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[750px] mt-16  space-y-20">
        <div className="w-full md:w-4/6 space-y-5">
          <div className="">
            <h1 className="text-4xl  sm:text-5xl font-medium tracking-tighter">
              Hey, I’m Saurav 👋
            </h1>
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight tracking-tighter">
              I am a{" "}
              <span className="text-4xl sm:text-5xl font-normal">{text}</span>
              <span>
                <Cursor />
              </span>
            </h1>
          </div>
          <p>
            Passionate frontend developer focused on crafting functional and
            visually appealing user interfaces, eager to grow through real-world
            experience.
          </p>
          <div className="flex items-center space-x-3">
            {resources.map((data, index) => (
              <div key={index} >
                <a href={data.href} target="_blank">
                  <button
                    className={`${
                      theme === "dark"
                        ? index === 0
                          ? "bg-white text-black"
                          : "bg-[#1C1C1C] text-white border-none"
                        : index === 0
                        ? "bg-[#1C1C1C] text-white"
                        : "border border-[#c5c5c5]"
                    } border h-[2.5rem] w-36 rounded-md text-sm font-medium cursor-pointer`}>
                    <p>{data.text}</p>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full space-y-10">
          <h3 className="font-semibold text-xl">Experience</h3>
          <div>
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col gap-4 lg:gap-2">
                <div>
                  <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
                    <h3 className="text-lg">{exp.title}</h3>
                    <p className="text-sm text-[#7C7F82]">{exp.duration}</p>
                  </div>
                  <p className="text-sm text-[#7C7F82]">{exp.work}</p>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full space-y-10">
          <h3 className="font-semibold text-xl">Education</h3>
          <div>
            {education.map((edu, index) => (
              <div key={index} className="flex flex-col gap-4 lg:gap-2">
                <div>
                  <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
                    <h3 className="text-lg">{edu.name}</h3>
                    <p className="text-sm text-[#7C7F82]">{edu.duration}</p>
                  </div>
                  <p className="text-sm text-[#7C7F82] flex items-center gap-2">
                    <span>
                      <FaLocationDot />
                    </span>
                    {edu.location}
                  </p>
                </div>
                <p>{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-40">
        <Footer />
      </div>
    </div>
  );
}
