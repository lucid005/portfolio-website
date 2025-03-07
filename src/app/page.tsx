"use client";

import About from "./About/page";
import MyProjects from "./MyProjects/page";
import TechStack from "./TechStack/page";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && <About />}
      {pathname === "/MyProjects" && <MyProjects />}
      {pathname === "/TechStack" && <TechStack />}
    </>
  );
}
