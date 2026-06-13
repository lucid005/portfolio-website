import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactLinks = [
  {
    href: "mailto:sauravshrestha2005@gmail.com",
    icon: Mail,
    label: "Email",
    value: "sauravshrestha2005@gmail.com",
  },
  {
    href: "https://github.com/lucid005",
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/lucid005",
  },
  {
    href: "https://www.linkedin.com/in/saurav-shrestha-36a39b290/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/saurav-shrestha-36a39b290",
  },
  {
    href: "mailto:sauravshrestha2005@gmail.com?subject=Resume%20Request",
    icon: FileText,
    label: "Resume",
    value: "Available on request",
  },
];

export function ContactSection() {
  return (
    <section className="space-y-7">
      <p className="max-w-xl text-base leading-relaxed text-muted-foreground dark:text-[#8a8a8a]">
        Open to full-stack roles, freelance projects, and collaborations where
        clean execution and thoughtful product thinking matter. If you have
        something worth building, reach out.
      </p>

      <div className="divide-y divide-border dark:divide-white/10">
        {contactLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              className="group flex items-center justify-between gap-6 py-4 text-sm transition first:pt-0 hover:text-foreground"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-hover:border-foreground/30 group-hover:text-foreground dark:border-white/10 dark:text-[#777777]">
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                <span className="font-medium text-foreground dark:text-[#f2f2f2]">
                  {link.label}
                </span>
              </span>

              <span className="truncate text-right text-xs text-muted-foreground transition group-hover:text-foreground dark:text-[#777777]">
                {link.value}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}