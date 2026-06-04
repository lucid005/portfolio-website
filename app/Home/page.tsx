"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaExpandAlt } from "react-icons/fa";

import { portfolioSections } from "@/lib/portfolio-sections";

const fadeTransition: Transition = { duration: 0.2, ease: "easeOut" };
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

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const isExpanded = expandedId !== null;
  const isTransitionLocked = isClosing;
  const expandedSection = portfolioSections.find(
    (section) => section.id === expandedId
  );
  const SelectedSection = expandedSection?.component;

  const openLink = (id: number) => {
    if (isTransitionLocked) {
      return;
    }

    setExpandedId(id);
  };

  const closeLink = () => {
    setIsClosing(true);
    setExpandedId(null);
  };

  return (
    <main className="max-w-6xl w-full p-4 h-screen overflow-hidden">
      <div className="h-full flex items-start justify-center gap-4">
        <div className="relative h-full w-2/6">
          <motion.div
            className="space-y-5 px-3"
            animate={{
              opacity: isExpanded ? 0 : 1,
              y: isExpanded ? -6 : 0,
            }}
            transition={fadeTransition}
          >
            <div className="space-y-1">
              <h1 className="text-2xl font-medium">Saurav Shrestha</h1>
              <p className="text-2xl text-muted-foreground leading-9 tracking-tight dark:text-[#8f8f8f]">
                Enthusiastic Web Developer Focused on Clean, Functional Design.
              </p>
            </div>
          </motion.div>

          <div className="mt-15 flex w-full flex-col gap-2 items-start">
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
                    opacity: isExpanded ? 0 : 1,
                    y: isExpanded ? 6 : 0,
                  }}
                  transition={fadeTransition}
                  style={{
                    pointerEvents:
                      isExpanded || isTransitionLocked ? "none" : "auto",
                  }}
                  onClick={() => openLink(section.id)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {isActive && !isExpanded && (
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

            <div className="absolute top-0 w-full">
              <AnimatePresence onExitComplete={() => setIsClosing(false)}>
                {isExpanded && (
                  <motion.div
                    key="back"
                    className="flex items-center gap-5 mb-6 pb-5"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={fadeTransition}
                  >
                    <button
                      onClick={closeLink}
                      className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background hover:bg-muted transition cursor-pointer dark:border-white/10 dark:bg-[#171717] dark:hover:bg-[#222222]"
                    >
                      <FaChevronDown className="rotate-90 text-sm text-muted-foreground" />
                    </button>

                    <motion.span
                      layoutId={`link-text-${expandedId}`}
                      className="text-2xl font-semibold tracking-tight text-foreground dark:text-[#f2f2f2]"
                      style={{ display: "block" }}
                      transition={textMorphTransition}
                    >
                      {expandedSection?.name}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fadeTransition}
                className="flex w-full items-start justify-center pt-10"
              >
                <p className="text-muted-foreground/50 text-sm ">
                  Click a section to explore
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
