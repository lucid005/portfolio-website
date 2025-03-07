import { ModeToggle } from "@/components/ModeToggle";

export default function TechStack() {
  return (
    <div className="p-4">
      <div className="hidden xl:flex justify-end w-full">
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-bold">Tech Stacks</h1>
    </div>
  );
}
