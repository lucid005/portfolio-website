import React from "react";
import { CircleUserRound, Folder, Wrench, FileUser, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const iconSize = "18px";

export const navLinks = [
  {
    text: "About",
    href: "/",
    icon: React.createElement(CircleUserRound, { size : iconSize }),
  },
  {
    text: "Projects",
    href: "/MyProjects",
    icon: React.createElement(Folder, { size : iconSize }),
  },
  {
    text: "Tech Stack",
    href: "/TechStack",
    icon: React.createElement(Wrench, { size : iconSize }),
  },
];

export const resources = [
  {
    text: "Resume",
    href: "/SauravShresthaResume.pdf",
    icon: React.createElement(FileUser, { size : iconSize }),
  },
  {
    text: "Send mail",
    href: "/Contact",
    icon: React.createElement(Mail, { size : iconSize }),
  },
];

export const social = [
  {
    text: "Github",
    href: "https://github.com/lucid005",
    icon: React.createElement(FaGithub, { size : iconSize }),
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/in/saurav-shrestha-36a39b290/",
    icon: React.createElement(FaLinkedin, { size : iconSize }),
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/not_lucid_/",
    icon: React.createElement(FaInstagram, { size : iconSize }),
  },
];

const NavData = () => {};

export default NavData;
