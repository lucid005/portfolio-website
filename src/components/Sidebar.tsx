"use client";

import Image from "next/image";
import { navLinks, resources, social } from "@/data/NavData";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { useRouter, usePathname } from "next/navigation";
import { theme } from "../../tailwind.config";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 xl:hidden"
          onClick={toggleSidebar}></div>
      )}

      <div className="xl:hidden flex items-center justify-between px-2 sm:px-5 py-5">
        <div className="flex items-center gap-2">
          <Image
            src={"/Profile.jpg"}
            width={60}
            height={60}
            alt="profile-img"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm leading-4">
            <p className="font-normal">Saurav Shrestha</p>
            <span className="font-light text-xs">Web Developer</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className={`${
              theme === "dark"
                ? "text-[#7C7F82] bg-[#2b2b2b]"
                : "text-gray-700 bg-white"
            } focus:outline-none  p-1 border rounded-sm`}>
            <Menu size={24} />
          </button>
          <ModeToggle />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed xl:relative inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0 transition-transform duration-200 ease-in-out w-[250px] h-full ${
          theme === "dark"
            ? "bg-[#131313] text-white"
            : "bg-white xl:bg-[#f9f9f9]"
        } z-40`}>
        <div className="w-full h-full px-4 space-y-8 mt-8">
          <div className="flex items-center gap-2">
            <Image
              src={"/Profile.jpg"}
              width={40}
              height={40}
              alt="profile-img"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm leading-4.5">
              <p className="font-normal">Saurav Shrestha</p>
              <span className="font-light">Web Developer</span>
            </div>
          </div>
          <div className="space-y-6">
            <nav className="space-y-1">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.href)}
                  className={`${
                    theme === "dark"
                      ? "text-[#cccccc] hover:text-white"
                      : "text-gray-700 hover:text-black"
                  } flex items-center text-sm font-medium rounded-[8px] w-full px-3 py-2 gap-2 cursor-pointer  transition-colors duration-200 ${
                    pathname === link.href
                      ? `${
                          theme === "dark"
                            ? "bg-[#2B2B2B] text-white border-[#3a3a3a]"
                            : "bg-white text-black "
                        }  border `
                      : ""
                  }`}>
                  <span>{link.icon}</span>
                  <p>{link.text}</p>
                </button>
              ))}
            </nav>
            <hr
              className={`${
                theme === "dark" ? "border-[#222222]" : ""
              } border-t-1 `}
            />
            <nav className="space-y-3">
              <h3 className="uppercase text-xs font-medium pl-2">Resources</h3>
              <ul>
                {resources.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      theme === "dark"
                        ? "text-[#cccccc] hover:text-white"
                        : "text-gray-700 hover:text-black"
                    } flex items-center text-sm font-medium rounded-[8px] w-full px-3 py-2 gap-2 cursor-pointer  transition-colors duration-200`}>
                    <span>{link.icon}</span>
                    <a href={link.href} target="_blank">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <hr
              className={`${
                theme === "dark" ? "border-[#222222]" : ""
              } border-t-1 `}
            />
            <nav className="space-y-3">
              <h3 className="uppercase text-xs font-medium mb-4 pl-2">
                Social
              </h3>
              <ul>
                {social.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      theme === "dark"
                        ? "text-[#cccccc] hover:text-white"
                        : "text-gray-700 hover:text-black"
                    } flex items-center text-sm font-medium rounded-[8px] w-full px-3 py-2 gap-2 cursor-pointer  transition-colors duration-200`}>
                    <span className="">{link.icon}</span>
                    <a href={link.href} target="_blank">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
