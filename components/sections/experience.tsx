import { DetailRow, SectionShell } from "./section-shell";

export function ExperienceSection() {
  return (
    <SectionShell intro="Practical development experience through portfolio work, focused builds, and iterative UI improvements.">
      <DetailRow title="Frontend Developer" meta="Portfolio and independent project work">
        Designed and built responsive pages with React and Next.js, refined
        interactions with Framer Motion, and kept the interface language
        consistent across sections.
      </DetailRow>

      <DetailRow title="UI implementation" meta="Layouts, components, responsive behavior">
        Translated content into structured interfaces, balanced spacing and type,
        and tested visual states across light and dark themes.
      </DetailRow>

      <DetailRow title="Development workflow" meta="Git, component structure, deployment readiness">
        Organized reusable components, worked with package-based tooling, and
        prepared projects for review, iteration, and deployment.
      </DetailRow>
    </SectionShell>
  );
}
