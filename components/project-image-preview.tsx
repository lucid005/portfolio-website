"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ProjectImagePreview({
  alt,
  frameClassName,
  height,
  imageClassName,
  src,
  width,
}: {
  alt: string;
  frameClassName?: string;
  height: number;
  imageClassName?: string;
  src: string;
  width: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-label={`Preview ${alt}`}
        className={cn(
          "group block w-full overflow-hidden rounded-lg border border-border bg-muted/25 text-left transition hover:border-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25",
          frameClassName
        )}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Image
          alt={alt}
          className={cn(
            "w-full object-cover transition duration-300 group-hover:scale-[1.015]",
            imageClassName
          )}
          height={height}
          src={src}
          unoptimized
          width={width}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm sm:p-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <button
              aria-label="Close image preview"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 dark:border-white/10 dark:bg-[#111111] dark:text-[#8a8a8a] dark:hover:text-[#f2f2f2]"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="max-h-[84vh] max-w-6xl"
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                alt={alt}
                className="max-h-[84vh] w-auto max-w-full rounded-lg border border-border object-contain shadow-2xl dark:border-white/10"
                height={height}
                src={src}
                unoptimized
                width={width}
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
