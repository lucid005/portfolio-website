import { ModeToggle } from "@/components/ModeToggle";
import { techs_frontend_tools, techs_tools } from "@/data/MyData";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="p-4 flex flex-col items-center justify-center border pb-40 ">
      <div className="hidden xl:flex justify-end w-full">
        <ModeToggle />
      </div>
      <div className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[750px] mt-16  space-y-20">
        <div className="space-y-15">
          <h1 className="text-3xl font-medium">Tech Stacks</h1>
          <div className="space-y-12">
            <div className="space-y-5">
              <h3>Tools I use to create and store my projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                {techs_tools.map((items, index) => (
                  <div key={index} className="flex w-full items-center gap-1 ">
                    <Image
                      src={items.dark_logo}
                      width={80}
                      height={80}
                      alt="logo"
                      className="w-[60px]"
                    />
                    <div>
                      <p>{items.title}</p>
                      <span>{items.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <h3>Frontend Frameworks and Materials I use to create amazing looking websites</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                {techs_frontend_tools.map((items, index) => (
                  <div key={index} className="flex w-full items-center gap-4 ">
                  <Image
                    src={items.dark_logo}
                    width={80}
                    height={80}
                    alt="logo"
                    className="w-[40px]"
                  />
                  <div>
                    <p>{items.title}</p>
                    <span>{items.description}</span>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
