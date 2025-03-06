import React from "react";
import { CircleUserRound, Folder, Wrench, FileUser, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  {
    text: "About",
    href: "/About",
    icon: React.createElement(CircleUserRound),
  },
  {
    text: "Projects",
    href: "/Projects",
    icon: React.createElement(Folder),
  },
  {
    text: "Tech Stack",
    href: "/TechStack",
    icon: React.createElement(Wrench),
  },
];

export const resources = [
  {
    text: "Resume",
    href: "",
    icon: React.createElement(FileUser),
  },
  {
    text: "Send mail",
    href: "",
    icon: React.createElement(Mail),
  },
];

export const social = [
  {
    text: "Github",
    href: "https://github.com/lucid005",
    icon: React.createElement(FaGithub),
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/in/saurav-shrestha-36a39b290/",
    icon: React.createElement(FaLinkedin),
  },
  {
    text: "Twitter",
    href: "https://x.com/Lucid57673",
    icon: React.createElement(FaXTwitter),
  },
];

const NavData = () => {};

export default NavData;
