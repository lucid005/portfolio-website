import { DetailRow, SectionShell } from "./section-shell";

export function CertificationsSection() {
  return (
    <SectionShell intro="A small set of learning proof points that support the practical work shown across the site.">
      <DetailRow
        href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
        label="View"
        meta="freeCodeCamp"
        title="Responsive Web Design"
      >
        Covers semantic HTML, modern CSS, responsive layouts, and accessible page
        structure.
      </DetailRow>

      <DetailRow
        href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/"
        label="View"
        meta="freeCodeCamp"
        title="JavaScript Algorithms and Data Structures"
      >
        Strengthens the JavaScript fundamentals behind reliable interface logic
        and everyday problem solving.
      </DetailRow>

      <DetailRow
        href="https://nextjs.org/learn"
        label="View"
        meta="Next.js learning path"
        title="Next.js Application Development"
      >
        Ongoing practice with App Router structure, component boundaries,
        routing, rendering, and deployment workflows.
      </DetailRow>
    </SectionShell>
  );
}
