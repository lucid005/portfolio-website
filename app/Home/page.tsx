"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaExpandAlt } from "react-icons/fa";

import { portfolioSections } from "@/lib/portfolio-sections";

const fadeTransition: Transition = { duration: 0.2, ease: "easeOut" };
const introRevealTransition: Transition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
};
const pillTransition: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 34,
  mass: 0.8,
};
const textMorphTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 32,
  mass: 0.95,
};
const introLayoutTransition: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 26,
  mass: 0.8,
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hasIntroInteracted, setHasIntroInteracted] = useState(false);
  const [isIntroExpanded, setIsIntroExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isExpanded = expandedId !== null;
  const isTransitionLocked = isClosing;
  const shouldHideLinks = isExpanded || isIntroExpanded;
  const expandedSection = portfolioSections.find(
    (section) => section.id === expandedId,
  );
  const SelectedSection = expandedSection?.component;

  const openLink = (id: number) => {
    if (isTransitionLocked) {
      return;
    }

    setExpandedId(id);
    setIsIntroExpanded(false);
  };

  const closeLink = () => {
    setIsClosing(true);
    setExpandedId(null);
  };

  const toggleIntro = () => {
    setHasIntroInteracted(true);
    setIsIntroExpanded((current) => !current);
  };

  const shortIntro = `Enthusiastic Web Developer Focused on Clean, Functional Design. `;
  const longIntro = `Passionate about crafting clean, functional web experiences. With a focus on frontend development, I turn thoughtful designs into seamless digital realities. I like interfaces that feel calm, purposeful, and easy to understand.`;
  const longIntroWords = longIntro.trim().split(" ");

  return (
    <main className="max-w-6xl w-full p-4 h-screen overflow-hidden">
      <div className="h-full flex items-start justify-center gap-4">
        <div className="relative h-full w-2/6">
          <motion.div
            layout
            className="absolute left-0 top-0 z-10 px-3"
            animate={{
              opacity: isExpanded ? 0 : 1,
            }}
            transition={fadeTransition}
            layoutRoot
            style={{
              pointerEvents: isExpanded ? "none" : "auto",
            }}
          >
            <div className="space-y-1">
              <h1 className="text-2xl font-medium tracking-tight">
                Saurav Shrestha
              </h1>

              <motion.div
                className="relative"
                initial={false}
                animate={{ height: isIntroExpanded ? 360 : 108 }}
                transition={
                  hasIntroInteracted ? introLayoutTransition : { duration: 0 }
                }
              >
                <motion.p
                  className="overflow-hidden text-2xl text-muted-foreground leading-9 tracking-tight dark:text-[#8f8f8f]"
                  style={{
                    height: "100%",
                  }}
                >
                  {shortIntro}
                  <motion.span
                    className="inline"
                    animate={isIntroExpanded ? "visible" : "hidden"}
                    initial="hidden"
                    variants={{
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
                    }}
                  >
                    {longIntroWords.map((word, index) => (
                      <motion.span
                        className="mr-[0.25em] inline-block"
                        key={`${word}-${index}`}
                        variants={{
                          hidden: { opacity: 0, y: -8 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={introRevealTransition}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.p>

                <motion.button
                  layout
                  initial={false}
                  transition={
                    hasIntroInteracted ? introLayoutTransition : { duration: 0 }
                  }
                  aria-expanded={isIntroExpanded}
                  className="absolute left-0 top-full mt-5 flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground dark:text-[#7a7a7a] dark:hover:text-[#f2f2f2]"
                  onClick={toggleIntro}
                >
                  {isIntroExpanded ? "Close" : "More"}
                  <FaChevronDown
                    className={`text-xs transition-transform ${
                      isIntroExpanded ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute left-0 top-0 w-full px-3">
            <AnimatePresence onExitComplete={() => setIsClosing(false)}>
              {isExpanded && (
                <motion.div
                  key="back"
                  className="flex items-center gap-5"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
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
                  }}
                >
                  <motion.button
                    variants={{
                      hidden: { opacity: 0,  y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                      mass: 0.8,
                    }}
                    onClick={closeLink}
                    className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-sm transition hover:bg-muted hover:shadow-md dark:border-white/10 dark:bg-[#171717] dark:hover:bg-[#222222]"
                  >
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, rotate: 360, x: 4 },
                        visible: { opacity: 1, rotate: 0, x: 0 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 24,
                      }}
                    >
                      <FaChevronDown className="rotate-90 text-sm text-muted-foreground transition-transform" />
                    </motion.span>
                  </motion.button>

                  <motion.span
                    layoutId={`link-text-${expandedId}`}
                    className="text-2xl font-semibold tracking-tight text-foreground dark:text-[#f2f2f2]"
                    style={{ display: "block" }}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={textMorphTransition}
                  >
                    {expandedSection?.name}
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute left-0 top-62 flex w-full flex-col gap-2 items-start">
            {portfolioSections.map((section, index) => {
              const isActive = activeIndex === index;
              const isThisExpanded = expandedId === section.id;

              if (isExpanded && !isThisExpanded) {
                return null;
              }

              return (
                <motion.button
                  key={section.id}
                  className={`relative flex w-5/6 cursor-pointer items-center px-4 py-2.5 text-lg font-medium transition ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  } ${
                    isActive
                      ? "dark:text-[#f2f2f2]"
                      : "dark:text-[#4f4f4f] dark:hover:text-[#7a7a7a]"
                  }`}
                  animate={{
                    opacity: shouldHideLinks ? 0 : 1,
                    y: shouldHideLinks ? 6 : 0,
                  }}
                  transition={{
                    ...fadeTransition,
                    delay: shouldHideLinks ? 0 : 0.2,
                  }}
                  style={{
                    pointerEvents:
                      shouldHideLinks || isTransitionLocked ? "none" : "auto",
                  }}
                  onClick={() => openLink(section.id)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {isActive && !shouldHideLinks && (
                    <motion.div
                      layoutId="active-link-pill"
                      className="absolute inset-0 rounded-2xl bg-card shadow-sm border-2 border-white dark:border-white/10 dark:bg-[#171717]"
                      transition={pillTransition}
                    />
                  )}
                  <motion.span
                    layoutId={`link-text-${section.id}`}
                    className="relative z-10 w-full text-left"
                    style={{ display: "block" }}
                    transition={textMorphTransition}
                  >
                    {section.name}
                  </motion.span>
                  <FaExpandAlt
                    className={`relative z-10 text-xs text-muted-foreground dark:text-[#7a7a7a] ${
                      isActive ? "block" : "hidden"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="flex w-4/6 flex-col ">
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key={expandedId}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={fadeTransition}
                className="max-w-2xl"
              >
                {SelectedSection ? <SelectedSection /> : null}
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: shouldHideLinks ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  ...fadeTransition,
                  delay: shouldHideLinks ? 0 : 0.12,
                }}
                className="flex w-full items-start justify-center pt-10"
                style={{
                  pointerEvents: shouldHideLinks ? "none" : "auto",
                }}
              >
                <p className="text-muted-foreground/50 text-sm ">
                  
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
