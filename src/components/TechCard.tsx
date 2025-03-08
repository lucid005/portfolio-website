"use client";

import Image from "next/image";
import { techs } from "../data/MyData";

export default function TechCard() {
  return (
    <div>
      {techs.map((data, index) => (
        <div key={index}>
            <Image src={data.logo} width={60} height={60} alt="logo" className="w-10 h-6" />
            <div>
                <p>{data.title}</p>
                <span>{data.description}</span>
            </div>
        </div>
      ))}
    </div>
  );
}
