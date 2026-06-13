import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  intro?: string;
};

type DetailRowProps = {
  children?: ReactNode;
  href?: string;
  label?: string;
  meta?: string;
  title: string;
};

export function SectionShell({ children, intro }: SectionShellProps) {
  return (
    <section className="space-y-7 py-3">
      {intro ? (
        <p className="w-full text-base leading-relaxed text-muted-foreground dark:text-[#8a8a8a]">
          {intro}
        </p>
      ) : null}
      <div className="divide-y divide-border dark:divide-white/10">
        {children}
      </div>
    </section>
  );
}

export function DetailRow({
  children,
  href,
  label = "Open",
  meta,
  title,
}: DetailRowProps) {
  return (
    <article className="group py-4 first:pt-0">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 space-y-1">
          <h3 className="text-sm font-medium tracking-normal text-foreground dark:text-[#f2f2f2]">
            {title}
          </h3>
          {meta ? (
            <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
              {meta}
            </p>
          ) : null}
        </div>

        {href ? (
          <a
            className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-foreground hover:decoration-foreground dark:text-[#777777] dark:decoration-white/15 dark:hover:text-[#f2f2f2]"
            href={href}
            rel="noreferrer"
            target="_blank"
          >
            {label}
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        ) : null}
      </div>

      {children ? (
        <div className="mt-3 text-sm leading-6 text-muted-foreground dark:text-[#8a8a8a]">
          {children}
        </div>
      ) : null}
    </article>
  );
}

export function InlineList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
