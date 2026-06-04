"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const themes = [
  { icon: Monitor, label: "System theme", value: "system" },
  { icon: Sun, label: "Light theme", value: "light" },
  { icon: Moon, label: "Dark theme", value: "dark" },
] as const;

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex w-fit items-center gap-1 h-7 p-0.75  rounded-[8px] bg-muted border border-border/40">
      {themes.map(({ icon: Icon, label, value }) => {
        const isActive = mounted && theme === value;

        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={mounted ? isActive : undefined}
            onClick={() => setTheme(value)}
            className={cn(
              "flex size-5.5 cursor-pointer items-center justify-center rounded-[6px] text-muted-foreground transition-all",
              "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
              isActive && "bg-background text-foreground border border-border/40 shadow-none"
            )}
          >
            <Icon className="z-10 size-3" strokeWidth={1.6} />
          </button>
        );
      })}
    </div>
  );
}