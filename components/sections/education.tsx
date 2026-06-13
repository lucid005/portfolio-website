import { SectionShell } from "./section-shell";

const educationItems = [
  {
    period: "2023 - Present",
    title: "BSc (Hons) Computing",
    institution: "Herald College Kathmandu - University of Wolverhampton",
    status: "Third year",
    description:
      "Studying Computing with modules covering AI and machine learning, big data systems, software engineering, and applied development. My final year project, Skill Lantern, was built and assessed here.",
  },
  {
    period: "Passed out 2023",
    title: "+2 Science (Computer Science)",
    institution: "Morgan International College, Basundhara",
    status: "GPA 2.94",
    description:
      "Built the foundation in mathematics, programming logic, and computer science fundamentals before moving into full-stack development.",
  },
] satisfies {
  period: string;
  title: string;
  institution: string;
  status: string;
  description: string;
}[];

export function EducationSection() {
  return (
    <SectionShell>
      <div className="relative pl-5 sm:pl-7">
        <div
          aria-hidden="true"
          className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-border dark:bg-white/10 sm:left-[7px]"
        />

        <div className="space-y-8">
          {educationItems.map((item) => (
            <article className="relative" key={`${item.title}-${item.period}`}>
              <span
                aria-hidden="true"
                className="absolute -left-5 top-1.5 size-2.5 rounded-full border border-foreground bg-background shadow-[0_0_0_6px_var(--background)] dark:border-[#f2f2f2] dark:bg-[#111111] dark:shadow-[0_0_0_6px_#111111] sm:-left-7 sm:size-3"
              />

              <div className="rounded-xl border border-border bg-background/70 p-4 transition hover:border-foreground/20 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0 space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-[#555555]">
                      {item.period}
                    </p>
                    <h3 className="text-base font-medium tracking-tight text-foreground dark:text-[#f2f2f2] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground dark:text-[#777777]">
                      {item.institution}
                    </p>
                  </div>

                  <span className="w-fit shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground dark:border-white/10 dark:text-[#777777]">
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground dark:text-[#8a8a8a]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
