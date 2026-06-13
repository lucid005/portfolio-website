import type { ComponentType } from "react";

import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ProjectsSection } from "@/components/sections/projects";
import TechStack from "@/components/sections/techstack";

export type PortfolioSection = {
  component: ComponentType;
  id: number;
  name: string;
};

export const portfolioSections: PortfolioSection[] = [
  { id: 1, name: "About", component: AboutSection },
  { id: 2, name: "Education", component: EducationSection },
  { id: 3, name: "Projects", component: ProjectsSection },
  { id: 4, name: "Tech Stack", component: TechStack },
  { id: 5, name: "Contact", component: ContactSection },
];
