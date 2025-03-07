"use client";

import { useTheme } from "next-themes";
import Sidebar from "@/components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-[#f9f9f9] text-black"
      } w-full min-h-screen xl:p-2 flex flex-col xl:flex-row xl:gap-2`}
    >
      <Sidebar />
      <div className={`${theme === "dark" ? "bg-[#0F0F0F] text-white border-[#222222]" : "bg-white text-black"} border xl:rounded-xl shadow-sm w-full flex-1`}>
        {children}
      </div>
    </div>
  );
}