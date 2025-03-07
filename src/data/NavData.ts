import React from "react";
import { CircleUserRound, Folder, Wrench, FileUser, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconSize = "18px";

export const navLinks = [
  {
    text: "About",
    href: "/about",
    icon: React.createElement(CircleUserRound, { size : iconSize }),
  },
  {
    text: "Projects",
    href: "/my-projects",
    icon: React.createElement(Folder, { size : iconSize }),
  },
  {
    text: "Tech Stack",
    href: "/tech-stack",
    icon: React.createElement(Wrench, { size : iconSize }),
  },
];

export const resources = [
  {
    text: "Resume",
    href: "",
    icon: React.createElement(FileUser, { size : iconSize }),
  },
  {
    text: "Send mail",
    href: "",
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
    text: "Twitter",
    href: "https://x.com/Lucid57673",
    icon: React.createElement(FaXTwitter, { size : iconSize }),
  },
];

const NavData = () => {};

export default NavData;
