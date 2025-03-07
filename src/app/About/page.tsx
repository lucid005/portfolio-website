"use client";

import { ModeToggle } from "@/components/ModeToggle";

export default function About() {
  return (
    <div className="p-4">
      <div className="hidden xl:flex justify-end w-full">
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4">This is the about page content.</p>
    </div>
  );
}
