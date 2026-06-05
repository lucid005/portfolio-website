import { DetailRow, SectionShell } from "./section-shell";

export function EducationSection() {
  return (
    <SectionShell intro="My learning path combines formal study with hands-on projects, documentation, and regular practice building real interfaces.">
      <DetailRow title="Computer Science Foundation" meta="Programming, web technologies, databases">
        Built a foundation in problem solving, application structure, database
        concepts, and the fundamentals behind modern web development.
      </DetailRow>

      <DetailRow title="Self-directed frontend study" meta="React, Next.js, TypeScript, UI systems">
        Continued learning through project work, framework documentation, and
        repeated practice with responsive layouts and component-driven design.
      </DetailRow>

      <DetailRow title="Areas I keep improving" meta="Accessibility, animation, performance">
        I am sharpening the details that separate a working page from a product
        experience: keyboard behavior, visual hierarchy, loading states, and
        maintainable styling.
      </DetailRow>
    </SectionShell>
  );
}
