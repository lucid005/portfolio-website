"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { useTheme } from "next-themes";
import { Send } from "lucide-react";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <div className="p-4 flex flex-col items-center pb-[140px]">
      <div className="hidden xl:flex justify-end w-full">
        <ModeToggle />
      </div>
      <div className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[750px] mt-16 space-y-20">
        <div className="space-y-15">
          <h1 className="text-3xl font-medium">Contact Me</h1>
          <form className="space-y-5 flex flex-col items-end">
            <div className="flex flex-col md:flex-row w-full gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className={`border p-4 rounded-lg w-full ${
                  theme === "dark" ? "border-[#ffffff3a]" : "border-[#0000002c]"
                } `}
              />
              <input
                type="email"
                placeholder="Email"
                className={`border p-4 rounded-lg w-full ${
                  theme === "dark" ? "border-[#ffffff3a]" : "border-[#0000002c]"
                } `}
              />
            </div>

            <textarea
              name=""
              id=""
              className={`border p-4 rounded-lg w-full resize-none ${
                theme === "dark" ? "border-[#ffffff3a]" : "border-[#0000002c]"
              } `}
              rows={6}
              placeholder="Messaage"
            />

            <button
              className={`border p-4 rounded-lg w-full md:w-2/6 cursor-pointer flex items-center justify-center gap-4 ${
                theme === "dark"
                  ? "border-[#ffffff3a] hover:bg-[#181818] text-[#c9c9c9]"
                  : "border-[#0000002c] hover:bg-[#eeeeee] text-[#4b4b4b]"
              } `}>
              {" "}
              <Send /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
