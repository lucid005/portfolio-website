import type { Transition, Variants } from "framer-motion";

export const fadeTransition: Transition = { duration: 0.2, ease: "easeOut" };

export const introRevealTransition: Transition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
};

export const pillTransition: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 34,
  mass: 0.8,
};

export const textMorphTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 32,
  mass: 0.95,
};

export const introLayoutTransition: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 26,
  mass: 0.8,
};

export const noTransition: Transition = { duration: 0 };

export const longIntroVariants: Variants = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.006,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.012,
    },
  },
};

export const longIntroWordVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
};

export const backHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.16, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
};

export const backButtonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const backButtonTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 18,
  mass: 0.8,
};

export const backIconVariants: Variants = {
  hidden: { opacity: 0, rotate: 360, x: 4 },
  visible: { opacity: 1, rotate: 0, x: 0 },
};

export const backIconTransition: Transition = {
  type: "spring",
  stiffness: 360,
  damping: 24,
};

export const backTitleVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export const portraitVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const portraitTransition: Transition = {
  duration: 0.28,
  ease: "easeOut",
};

export function delayedFadeTransition(isHidden: boolean, delay = 0.12): Transition {
  return {
    ...fadeTransition,
    delay: isHidden ? 0 : delay,
  };
}
