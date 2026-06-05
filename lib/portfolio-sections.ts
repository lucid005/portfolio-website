import type { ComponentType } from "react";

import { AboutSection } from "@/components/sections/about";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";

export type PortfolioSection = {
  component: ComponentType;
  id: number;
  name: string;
};

export const portfolioSections: PortfolioSection[] = [
  { id: 1, name: "About", component: AboutSection },
  { id: 2, name: "Education", component: EducationSection },
  { id: 3, name: "Certifications", component: CertificationsSection },
  { id: 4, name: "Experience", component: ExperienceSection },
  { id: 5, name: "Projects", component: ProjectsSection },
  { id: 6, name: "Contact", component: ContactSection },
];
