import { DetailRow, InlineList, SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell intro="I build clean, responsive web interfaces with a focus on clarity, performance, and small details that make products feel easier to use.">
      <DetailRow
        title="Current focus"
        meta="Frontend development, product interfaces, and practical web systems"
      >
        I work mostly with React, Next.js, TypeScript, and Tailwind CSS, turning
        ideas into polished pages, dashboards, and interactive UI patterns.
      </DetailRow>

      <DetailRow title="How I like to work" meta="Simple structure, careful spacing, readable code">
        I prefer calm interfaces, meaningful motion, and components that stay
        easy to scan, maintain, and extend.
      </DetailRow>

      <DetailRow title="Core tools" meta="The stack I reach for most often">
        <InlineList
          items={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Git",
          ]}
        />
      </DetailRow>
    </SectionShell>
  );
}
