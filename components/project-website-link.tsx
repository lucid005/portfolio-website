"use client";

import { ArrowUpRight, Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const linkClassName =
  "group/link inline-flex items-center gap-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-foreground hover:decoration-foreground dark:text-[#777777] dark:decoration-white/15 dark:hover:text-[#f2f2f2]";

export function ProjectWebsiteLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  if (href) {
    return (
      <a
        aria-label={`Visit website for ${title}`}
        className={linkClassName}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        <Globe className="size-3" aria-hidden="true" />
        <span>Visit website</span>
        <ArrowUpRight
          className="size-2.5 opacity-70 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          aria-disabled="true"
          className="inline-flex cursor-not-allowed items-center gap-1 text-xs text-muted-foreground/45 underline decoration-border/50 underline-offset-4 dark:text-[#555555] dark:decoration-white/10"
          tabIndex={0}
        >
          <Globe className="size-3" aria-hidden="true" />
          <span>Visit website</span>
          <ArrowUpRight className="size-2.5 opacity-40" aria-hidden="true" />
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={6}>
        <p>No live website yet</p>
      </TooltipContent>
    </Tooltip>
  );
}
