import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { ProjectImagePreview } from "@/components/project-image-preview";
import { ProjectWebsiteLink } from "@/components/project-website-link";
import { ProjectReveal } from "@/components/project-reveal";
import { getProject, projects } from "@/lib/projects";
import Footer from "@/components/Footer";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="min-h-dvh bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <ProjectReveal>
            <Link
              className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground dark:text-[#777777] dark:hover:text-[#f2f2f2]"
              href="/"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              <span>Back</span>
            </Link>
          </ProjectReveal>

          <ProjectReveal>
            <header className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                  {project.role}
                </p>
                <h1 className="text-3xl font-medium tracking-normal sm:text-4xl">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground dark:text-[#8a8a8a]">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
                <a
                  className="group inline-flex items-center gap-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-foreground hover:decoration-foreground dark:text-[#777777] dark:decoration-white/15 dark:hover:text-[#f2f2f2]"
                  href={project.links.source}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub className="size-3" aria-hidden="true" />
                  <span>Source code</span>
                  <ArrowUpRight
                    className="size-2.5 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <ProjectWebsiteLink
                  href={project.links.website}
                  title={project.title}
                />
              </div>
            </header>
          </ProjectReveal>

          <ProjectReveal>
            <ProjectImagePreview
              alt={project.imageAlt}
              height={432}
              imageClassName="aspect-[16/9]"
              src={project.image}
              width={768}
            />
          </ProjectReveal>

          {project.stats ? (
            <ProjectReveal>
              <section
                aria-label="Project facts"
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              >
                {project.stats.map((stat) => (
                  <div
                    className="rounded-lg border border-border bg-muted/20 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                    key={stat.label}
                  >
                    <p className="text-[11px] leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </section>
            </ProjectReveal>
          ) : null}

          <ProjectTextSection
            eyebrow={project.meta}
            paragraphs={project.overview ?? project.details}
            title="Overview"
          />

          {project.techStack ? (
            <ProjectReveal>
              <section className="grid gap-5 border-t border-border pt-8 dark:border-white/10 lg:grid-cols-[0.7fr_1fr]">
                <div className="space-y-1">
                  <h2 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                    Tech stack
                  </h2>
                  <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                    The tools and services behind the product experience.
                  </p>
                </div>

                <div className="divide-y divide-border dark:divide-white/10">
                  {project.techStack.map((group) => (
                    <div
                      className="grid gap-3 py-4 first:pt-0 sm:grid-cols-[9rem_1fr] sm:items-baseline"
                      key={group.title}
                    >
                      <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground dark:text-[#5f5f5f]">
                        {group.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            className="rounded-md border border-border bg-muted/20 px-2.5 py-1 text-xs text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-[#cfcfcf]"
                            key={item}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ProjectReveal>
          ) : null}

          {project.workflow ? (
            <ProjectReveal>
              <section className="grid gap-5 border-t border-border pt-8 dark:border-white/10 lg:grid-cols-[0.7fr_1fr]">
                <div className="space-y-1">
                  <h2 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                    How it works
                  </h2>
                  <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                    The main flow from user input to useful results.
                  </p>
                </div>

                <div className="divide-y divide-border dark:divide-white/10">
                  {project.workflow.map((step, index) => (
                    <div
                      className="grid gap-3 py-4 first:pt-0"
                      key={step.title}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs text-muted-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-[#8a8a8a]">
                          {index + 1}
                        </span>
                        <h3 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="pl-10 text-sm leading-6 text-muted-foreground dark:text-[#8a8a8a]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </ProjectReveal>
          ) : null}

          {project.featureGroups ? (
            <ProjectReveal>
              <section className="space-y-5 border-t border-border pt-8 dark:border-white/10">
                <div className="space-y-1">
                  <h2 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                    Key features
                  </h2>
                  <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                    The core tools behind the product experience.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {project.featureGroups.map((group) => (
                    <section
                      className="rounded-lg border border-border bg-muted/20 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                      key={group.title}
                    >
                      <h3 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                        {group.title}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {group.items.map((item) => (
                          <li
                            className="flex gap-3 text-sm leading-6 text-muted-foreground dark:text-[#8a8a8a]"
                            key={item}
                          >
                            <Check
                              className="mt-1 size-3.5 shrink-0 text-foreground/70 dark:text-[#cfcfcf]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </section>
            </ProjectReveal>
          ) : null}

          {project.highlights ? (
            <ProjectReveal>
              <section className="grid gap-5 border-t border-border pt-8 dark:border-white/10 lg:grid-cols-[0.7fr_1fr]">
                <div className="space-y-1">
                  <h2 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                    Technical highlights
                  </h2>
                  <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                    The implementation details that shaped the product.
                  </p>
                </div>

                <div className="grid gap-3">
                  {project.highlights.map((highlight) => (
                    <article
                      className="rounded-lg border border-border bg-background p-4 dark:border-white/10 dark:bg-white/[0.02]"
                      key={highlight.title}
                    >
                      <h3 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-[#8a8a8a]">
                        {highlight.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </ProjectReveal>
          ) : null}

          {project.gallery ? (
            <ProjectReveal>
              <section className="space-y-5 border-t border-border pt-8 dark:border-white/10">
                <div className="space-y-1">
                  <h2 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
                    Interface views
                  </h2>
                  <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
                    Additional screens from the product flow.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {project.gallery.map((image) => (
                    <ProjectImagePreview
                      alt={image.alt}
                      height={360}
                      imageClassName="aspect-[4/3]"
                      key={image.src}
                      src={image.src}
                      width={480}
                    />
                  ))}
                </div>
              </section>
            </ProjectReveal>
          ) : null}
        </div>
      </div>
      <Footer />
    </main>
  );
}

function ProjectTextSection({
  eyebrow,
  paragraphs,
  title,
}: {
  eyebrow?: string;
  paragraphs: string[];
  title: string;
}) {
  return (
    <ProjectReveal>
      <section className="grid gap-5 border-t border-border pt-8 dark:border-white/10 lg:grid-cols-[0.7fr_1fr]">
        <div className="space-y-1">
          <h2 className="text-sm font-medium text-foreground dark:text-[#f2f2f2]">
            {title}
          </h2>
          {eyebrow ? (
            <p className="text-xs leading-5 text-muted-foreground dark:text-[#6f6f6f]">
              {eyebrow}
            </p>
          ) : null}
        </div>

        <div className="divide-y divide-border dark:divide-white/10">
          {paragraphs.map((paragraph) => (
            <p
              className="py-4 text-sm leading-6 text-muted-foreground first:pt-0 dark:text-[#8a8a8a]"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </ProjectReveal>
  );
}
