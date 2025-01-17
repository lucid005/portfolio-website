"use client";

import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="flex items-center gap-2">
        <Image
          src={"/Profile.jpg"}
          width={60}
          height={60}
          alt="profile-img"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-medium">Saurav Shrestha</h3>
          <p className="text-xs">Web Developer</p>
        </div>
      </div>

      <div className="mt-8">
        <ul className="flex flex-col space-y-1">
          <Link href="/About">
            <li className="flex items-center py-2 px-2 rounded-lg gap-2 bg-black text-white  hover:transition-all hover:duration-200">
              <CgProfile className="w-4 h-4" />
              <p className="text-sm font-medium">About</p>
            </li>
          </Link>
          <Link href="/Projects">
            <li className="flex items-center py-2 px-2 rounded-lg gap-2 hover:bg-[#EDEDED] hover:transition-all hover:duration-200">
              <FaRegFolderOpen className="w-4 h-4" />
              <p className="text-sm font-medium">Projects</p>
            </li>
          </Link>
          <Link href="/Stack">
            <li className="flex items-center py-2 px-2 rounded-lg gap-2  hover:bg-[#EDEDED] hover:transition-all hover:duration-200">
              <FiTool className="w-4 h-4" />
              <p className="text-sm font-medium">Stack</p>
            </li>
          </Link>
        </ul>
      </div>

      <hr className="mt-6 mb-6" />

      <div className="flex flex-col space-y-2">
        <h3 className="uppercase text-xs text-[#272727]">Resources</h3>
        <div>
          <ul className="flex flex-col space-y-1">
            <a href="">
              <li className="flex items-center py-2 px-2 rounded-lg gap-2 hover:bg-[#EDEDED] hover:transition-all hover:duration-200">
                <ImProfile className="w-4 h-4" />
                <p className="text-sm font-medium">Resume</p>
              </li>
            </a>
            <a href="">
              <li className="flex items-center py-2 px-2 rounded-lg gap-2 hover:bg-[#EDEDED] hover:transition-all hover:duration-200">
                <MdMailOutline className="w-4 h-4" />
                <p className="text-sm font-medium">Send Mail</p>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <hr className="mt-6 mb-6" />

      <div className="flex flex-col space-y-2">
        <h3 className="uppercase text-xs text-[#272727]">Socials</h3>
        <div>
          <ul className="flex flex-col space-y-1">
            <a href="https://github.com/lucid005">
              <li className="flex items-center py-2 px-2 rounded-lg gap-2 hover:bg-[#EDEDED] hover:transition-all hover:duration-200">
                <FaGithub className="w-4 h-4" />
                <p className="text-sm font-medium">Github</p>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/saurav-shrestha-36a39b290/">
              <li className="flex items-center py-2 px-2 rounded-lg gap-2 hover:bg-[#EDEDED] hover:transition-all hover:duration-200">
                <FaLinkedin className="w-4 h-4" />
                <p className="text-sm font-medium">Linkedin</p>
              </li>
            </a>
            <a href="https://x.com/Lucid57673">
              <li className="flex items-center py-2 px-2 rounded-lg gap-2 hover:bg-[#EDEDED] hover:transition-all hover:duration-200">
                <FaTwitter className="w-4 h-4" />
                <p className="text-sm font-medium">Twitter</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
