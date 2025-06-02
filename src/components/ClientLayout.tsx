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
      } w-full h-screen flex flex-col xl:flex-row`}
    >
      <Sidebar />

      <div className="flex-1 overflow-y-auto h-screen p-0 xl:p-2">
        <div
          className={`${
            theme === "dark"
              ? "bg-[#0F0F0F] text-white border-[#222222]"
              : "bg-white text-black"
          } border xl:rounded-xl shadow-sm w-full min-h-full`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
