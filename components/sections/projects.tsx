import { ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ProjectWebsiteLink } from "@/components/project-website-link";
import { projects } from "@/lib/projects";
import { SectionShell } from "./section-shell";

export function ProjectsSection() {
  return (
    <SectionShell>
      <div className="grid gap-4 mb-0 lg:mb-20">
        {projects.map((project) => (
          <article
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition hover:border-foreground/20 dark:border-white/10 dark:bg-white/2 dark:hover:border-white/20 mb-10"
            key={project.slug}
          >
            <div className="border-b border-border bg-muted/25 dark:border-white/10 dark:bg-white/3">
              <Image
                alt={project.imageAlt}
                className="aspect-16/7 w-full object-cover"
                height={280}
                src={project.image}
                unoptimized
                width={640}
              />
            </div>

            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                  {project.role}
                </p>
                <h3 className="text-sm font-medium tracking-normal text-foreground dark:text-[#f2f2f2]">
                  {project.title}
                </h3>
                <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                  {project.meta}
                </p>
              </div>

              <p className="text-sm leading-6 text-muted-foreground dark:text-[#8a8a8a]">
                {project.summary}
              </p>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
                <a
                  aria-label={`Source code for ${project.title}`}
                  className="group/link inline-flex items-center gap-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-foreground hover:decoration-foreground dark:text-[#777777] dark:decoration-white/15 dark:hover:text-[#f2f2f2]"
                  href={project.links.source}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub className="size-3" aria-hidden="true" />
                  <span>Source code</span>
                  <ArrowUpRight
                    className="size-2.5 opacity-70 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <Link
                  aria-label={`Details for ${project.title}`}
                  className="group/link inline-flex items-center gap-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-foreground hover:decoration-foreground dark:text-[#777777] dark:decoration-white/15 dark:hover:text-[#f2f2f2]"
                  href={`/projects/${project.slug}`}
                >
                  <FileText className="size-3" aria-hidden="true" />
                  <span>Details</span>
                  <ArrowUpRight
                    className="size-2.5 opacity-70 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <ProjectWebsiteLink
                  href={project.links.website}
                  title={project.title}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
