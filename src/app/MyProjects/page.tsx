"use client";

import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import { projects } from "@/data/MyData";
import { useTheme } from "next-themes";
import { GoArrowUpRight } from "react-icons/go";

export default function MyProjects() {
  const { theme } = useTheme();

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="hidden xl:flex justify-end w-full">
        <ModeToggle />
      </div>
      <div className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[750px] mt-16  space-y-20">
        <div className="space-y-15">
          <h1 className="text-3xl font-medium">Projects</h1>
          <div className="flex flex-col gap-10">
            {projects.map((data, index) => (
              <div
                key={index}
                className="flex w-full items-start flex-col lg:flex-row gap-2 lg:gap-4">
                <div className="w-full lg:w-1/6">
                  <p className="font-medium">{data.time}</p>
                </div>
                <div className="space-y-4 w-full lg:w-5/6">
                  <div className="">
                    <h3 className="text-2xl font-medium">{data.title}</h3>
                    <p className="text-xs md:text-sm text-[#7C7F82]  font-medium">
                      Tech Used -{" "}
                      <span className="font-normal">{data.techs}</span>
                    </p>
                  </div>
                  <p
                    className={`text-sm sm:text-[16px] ${
                      theme === "dark" ? "text-[#e7e7e7]" : "text-[#2c2c2c]"
                    }`}>
                    {data.description}
                  </p>
                  <div className="flex flex-col sm:flex-row item-center gap-2 sm:gap-4 text-sm">
                    {data.sourceCodeFrn && (
                      <a
                        href={data.sourceCodeFrn}
                        className="flex items-center hover:text-blue-800"
                        target="_blank">
                        Source Code (frontend){" "}
                        <span className="font-bold">
                          <GoArrowUpRight />
                        </span>
                      </a>
                    )}
                    {data.sourceCodeBack && (
                      <a
                        href={data.sourceCodeBack}
                        className="flex items-center hover:text-blue-800"
                        target="_blank">
                        Source Code (backend){" "}
                        <span className="font-bold">
                          <GoArrowUpRight />
                        </span>
                      </a>
                    )}
                    {!data.sourceCodeFrn &&
                      !data.sourceCodeBack &&
                      data.sourceCode && (
                        <a
                          href={data.sourceCode}
                          className="flex items-center hover:text-blue-800"
                          target="_blank">
                          Source Code{" "}
                          <span className="font-bold">
                            <GoArrowUpRight />
                          </span>
                        </a>
                      )}
                  </div>
                </div>
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
