import { DetailRow, InlineList, SectionShell } from "./section-shell";

export function ProjectsSection() {
  return (
    <SectionShell intro="Selected work focused on clean interfaces, responsive structure, and small interaction details.">
      <DetailRow
        href="https://github.com/sauravshrestha/portfolio-website"
        label="Code"
        meta="Next.js, TypeScript, Tailwind CSS, Framer Motion"
        title="Portfolio Website"
      >
        A minimal personal portfolio with animated section transitions, theme
        support, and content organized around quick scanning.
      </DetailRow>

      <DetailRow
        href="https://github.com/sauravshrestha"
        label="Code"
        meta="React, component design, responsive layout"
        title="Interface Components"
      >
        A collection of reusable UI patterns for navigation, cards, forms, and
        section layouts, built to stay visually consistent across screens.
      </DetailRow>

      <DetailRow
        href="https://github.com/sauravshrestha"
        label="Code"
        meta="Next.js, data display, practical UX"
        title="Learning Dashboard"
      >
        A focused dashboard concept for tracking learning progress, organizing
        resources, and making next actions easy to find.
      </DetailRow>

      <DetailRow title="Common thread" meta="What I try to show through each build">
        <InlineList
          items={[
            "Clean layout",
            "Readable code",
            "Responsive design",
            "Subtle motion",
            "Useful details",
          ]}
        />
      </DetailRow>
    </SectionShell>
  );
}
