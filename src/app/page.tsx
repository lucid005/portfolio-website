"use client"

import Sidebar from "@/components/Sidebar";
import About from "./pages/About/page";
import MyProjects from "./pages/MyProjects/page";
import TechStack from "./pages/TechStack/page";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? 'bg-black text-white' : 'bg-[#f9f9f9] text-black'} w-full min-h-screen xl:p-2 flex flex-col xl:flex-row`}>
        <Sidebar />
      <div className="bg-white border xl:rounded-xl shadow-sm w-full flex-1">
        <About />
        <MyProjects />
        <TechStack />
      </div>
    </div>
  );
}
