import { ThemeToggle } from "@/components/theme-toggle";

import Home from "./Home/page";

export default function App() {
  return (
    <main className="flex w-full max-h-screen flex-col items-center justify-center pt-50">
      <Home />
      <div className="absolute bottom-4 right-4 flex flex-col items-end gap-3">
        <ThemeToggle />
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Saurav Shrestha. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}
