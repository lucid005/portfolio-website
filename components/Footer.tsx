import { ThemeToggle } from "./theme-toggle";

type FooterProps = {
  className?: string;
  position?: "absolute" | "fixed";
};

export default function Footer({
  className = "",
  position = "absolute",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full ${position} bottom-[calc(1rem+env(safe-area-inset-bottom))] right-0 flex flex-col items-end gap-3 pr-5 z-30 text-right ${className}`}
    >
      <ThemeToggle />
      <p className="text-xs text-muted-foreground">
        &copy; {year} Saurav Shrestha. All rights reserved.
      </p>
    </footer>
  );
}
