import type { ComponentType } from "react";

import { AboutSection } from "@/components/sections/about";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { IntroductionSection } from "@/components/sections/introduction";
import { ProjectsSection } from "@/components/sections/projects";

export type PortfolioSection = {
  component: ComponentType;
  id: number;
  name: string;
};

export const portfolioSections: PortfolioSection[] = [
  { id: 1, name: "Introduction", component: IntroductionSection },
  { id: 2, name: "About Me", component: AboutSection },
  { id: 3, name: "Education", component: EducationSection },
  { id: 4, name: "Certifications", component: CertificationsSection },
  { id: 5, name: "Working Experience", component: ExperienceSection },
  { id: 6, name: "Projects", component: ProjectsSection },
  { id: 7, name: "Contact Me", component: ContactSection },
];
