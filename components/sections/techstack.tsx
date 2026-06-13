import type { IconType } from "react-icons";
import {
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type StackItem = {
  icon: IconType;
  name: string;
};

const stack = [
  {
    category: "Frontend",
    items: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiFramer, name: "Framer Motion" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiPython, name: "Python" },
      { icon: SiPrisma, name: "Prisma" },
    ],
  },
  {
    category: "Database",
    items: [
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiSupabase, name: "Supabase" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    category: "Tools",
    items: [
      { icon: SiGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiVercel, name: "Vercel" },
      { icon: SiFigma, name: "Figma" },
      { icon: SiPostman, name: "Postman" },
    ],
  },
] satisfies {
  category: string;
  items: StackItem[];
}[];

export function TechStackSection() {
  return (
    <section className="space-y-7">
      <p className="max-w-xl text-base leading-relaxed text-muted-foreground dark:text-[#8a8a8a]">
        The tools I reach for most. Chosen for practicality, each one earns its
        place by being genuinely useful in a production context.
      </p>

      <div className="divide-y divide-border dark:divide-white/10">
        {stack.map((group) => (
          <div
            key={group.category}
            className="flex flex-col items-start gap-3 py-4 first:pt-0 sm:flex-row sm:gap-6"
          >
            <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground dark:text-[#4f4f4f] sm:w-28 sm:pt-2">
              {group.category}
            </span>
            <div className="flex min-w-0 max-w-full flex-wrap gap-2">
              {group.items.map(({ icon: Icon, name }) => (
                <span
                  key={name}
                  className="inline-flex max-w-full items-center gap-2 rounded-md border border-border bg-muted/20 px-2.5 py-1.5 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-[#c4c4c4]"
                >
                  <Icon
                    className="size-3.5 shrink-0 text-muted-foreground dark:text-[#8a8a8a]"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 break-words">{name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;
