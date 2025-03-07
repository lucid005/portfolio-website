"use client"

import Image from "next/image";
import { navLinks, resources, social } from "@/data/NavData";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toogleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="max-w-64 h-full border">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toogleSidebar} className="text-gray-700 focus:outline-none">
          {isOpen ? <Menu size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="w-full h-full px-6 space-y-5 mt-8">
        <div className="flex items-center gap-2">
          <Image
            src={"/Profile.jpg"}
            width={60}
            height={60}
            alt="profile-img"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm leading-4">
            <p className="font-medium">Saurav Shrestha</p>
            <span className="font-light text-xs">Web Developer</span>
          </div>
        </div>
        <div className="space-y-6">
          <nav>
            {navLinks.map((link, index) => (
              <button
                key={index}
                className="flex items-center text-gray-700 text-sm rounded-[8px] w-full p-2 gap-2 cursor-pointer hover:text-black">
                <span>{link.icon}</span>
                <p>{link.text}</p>
              </button>
            ))}
          </nav>
          <hr />
          <nav className="space-y-3">
            <h3 className="uppercase text-xs font-medium pl-2">Resources</h3>
            <ul>
              {resources.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-sm rounded-[8px] w-full p-2 gap-2 cursor-pointer">
                  <span>{link.icon}</span>
                  <a href={link.href} target="_blank">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <hr />
          <nav className="space-y-3">
            <h3 className="uppercase text-xs font-medium mb-4 pl-2">Social</h3>
            <ul>
              {social.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-sm rounded-[8px] w-full p-2 gap-2 cursor-pointer hover:text-black">
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
  );
}
