import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const description =
  "Full-stack developer in Kathmandu building clean, functional web products with thoughtful UI, practical backend systems, and purposeful motion.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saurav Shrestha | Full-stack Developer",
    template: "%s | Saurav Shrestha",
  },
  description,
  alternates: {
    canonical: "/",
  },
  applicationName: "Saurav Shrestha Portfolio",
  authors: [{ name: "Saurav Shrestha" }],
  creator: "Saurav Shrestha",
  keywords: [
    "Saurav Shrestha",
    "Full-stack developer",
    "Web developer",
    "Next.js developer",
    "React developer",
    "Kathmandu developer",
  ],
  openGraph: {
    title: "Saurav Shrestha | Full-stack Developer",
    description,
    siteName: "Saurav Shrestha Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Shrestha | Full-stack Developer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
