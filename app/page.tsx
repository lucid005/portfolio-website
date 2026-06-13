import { ThemeToggle } from "@/components/theme-toggle";

import Home from "./Home/page";

export default function App() {
  return (
    <main className="relative flex max-h-screen w-full flex-col items-center overflow-x-hidden py-0 lg:justify-center lg:py-50">
      <Home />
      <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end gap-3 max-sm:hidden">
        <ThemeToggle />
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Saurav Shrestha. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}
