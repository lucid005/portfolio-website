"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function About() {
  const [text] = useTypewriter({
    words: ["Developer", "Student"],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 100,
  });

  return (
    <div className="w-[700px] h-52 mt-16 space-y-20">
      <div className="space-y-5">
        <div>
          <h1 className="text-4xl font-medium ">Hey, I’m Saurav 👋</h1>
          <h1 className="text-4xl font-medium">
            I am a{" "}
            <span style={{ fontWeight: "normal", fontSize: "36px" }}>
              {text}
            </span>
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
        <div className="flex items-center space-x-4">
          <button className="border py-2 px-5 rounded-md text-sm font-semibold bg-black text-white">
            Resume
          </button>
          <button className="border border-[#c5c5c5] py-2 px-5 rounded-md text-sm">
            Send Mail
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Experience</h3>
        <div></div>
      </div>
    </div>
  );
}
