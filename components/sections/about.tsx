import { DetailRow, SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell intro="I’m Saurav Shrestha, a full-stack developer based in Kathmandu, Nepal. I build web products that combine technical structure with a clean visual direction. My work is shaped by a simple goal: create software that feels easy to use, useful in practice, and visually aligned with the purpose of the product.">
      <DetailRow
        title="What I do"
        meta="Full-stack development with a product mindset"
      >
        I design and build web applications end-to-end from the layout and
        interaction on the frontend to the APIs, databases, and logic running
        behind it. Most of my work sits at the intersection of clean UI and
        practical backend architecture.
      </DetailRow>

      <DetailRow
        title="How I approach projects"
        meta="Feature-first thinking, then build outward"
      >
        Before writing a line of code, I identify the one feature the product
        lives or dies by and build around that. This keeps scope focused and
        outcomes predictable. I prefer shipping something well-made over
        something feature-heavy.
      </DetailRow>

      <DetailRow
        title="Design sensibility"
        meta="Minimal, aesthetic, purposefully animated"
      >
        I reach for calm layouts, deliberate typography, and subtle motion that
        makes interfaces feel alive without being loud. Color palettes and
        spacing are decisions, not defaults — every visual choice should have a
        reason.
      </DetailRow>
    </SectionShell>
  );
}
