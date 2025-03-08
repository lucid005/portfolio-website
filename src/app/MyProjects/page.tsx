import { ModeToggle } from "@/components/ModeToggle";
import { projects } from "@/data/MyData";
import { GoArrowUpRight } from "react-icons/go";

export default function MyProjects() {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="hidden xl:flex justify-end w-full">
        <ModeToggle />
      </div>
      <div className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[750px] mt-16  space-y-20">
        <div className="space-y-10">
          <h1 className="text-3xl font-medium">Projects</h1>
          <div>
            <div className="flex">
              {projects.map((data, index) => (
                <div
                  key={index}
                  className="flex w-full items-start flex-col lg:flex-row gap-2 lg:gap-4">
                  <div className="w-1/4">
                    <p className="font-medium">{data.time}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="">
                      <h3 className="text-2xl font-medium">{data.title}</h3>
                      <p className="text-xs md:text-sm text-[#7C7F82]  font-medium">
                        Tech Used -{" "}
                        <span className="font-normal">{data.techs}</span>
                      </p>
                    </div>
                    <p className="text-sm sm:text-[16px] text-[#2c2c2c]">{data.description}</p>
                    <div className="flex flex-col sm:flex-row item-center gap-2 sm:gap-4 text-sm">
                      <a
                        href={data.sourceCodeFrn}
                        className="flex items-center hover:text-blue-800">
                        Source Code (frontend){" "}
                        <span className="font-bold">
                          <GoArrowUpRight />
                        </span>
                      </a>
                      <a
                        href={data.sourceCodeBack}
                        className="flex items-center hover:text-blue-800">
                        Source Code (backend){" "}
                        <span className="font-bold">
                          <GoArrowUpRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
