"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function ProjectReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      variants={revealVariants}
      viewport={{ amount: 0.18, once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
