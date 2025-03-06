import Image from "next/image";
import { navLinks, resources, social } from "@/app/data/NavData";

import { CircleUserRound } from "lucide-react";

export default function Sidebar() {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src={"/Profile.jpg"}
          width={60}
          height={60}
          alt="profile-img"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p>Saurav Shrestha</p>
          <span>Web Developer</span>
        </div>
      </div>
      <div>
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center text-gray-800">
                <span className="text-gray-500">{link.icon}</span>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul>
            {resources.map((link, index) => (
              <li key={index} className="flex items-center">
                <span>{link.icon}</span>
                <a href={link.href} target="_blank">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul>
            {social.map((link, index) => (
              <li key={index} className="flex items-center">
                <span>{link.icon}</span>
                <a href={link.href} target="_blank">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
