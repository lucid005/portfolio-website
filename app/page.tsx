"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaExpandAlt } from "react-icons/fa";

import {
  backButtonTransition,
  backButtonVariants,
  backHeaderVariants,
  backIconTransition,
  backIconVariants,
  backTitleVariants,
  delayedFadeTransition,
  fadeTransition,
  introLayoutTransition,
  introRevealTransition,
  longIntroVariants,
  longIntroWordVariants,
  noTransition,
  pillTransition,
  portraitTransition,
  portraitVariants,
  textMorphTransition,
} from "@/lib/portfolio-animations";
import { portfolioSections } from "@/lib/portfolio-sections";
import Image from "next/image";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hasIntroInteracted, setHasIntroInteracted] = useState(false);
  const [isIntroExpanded, setIsIntroExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current && expandedId !== null) {
        scrollRef.current.scrollTop += e.deltaY;
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [expandedId]);

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
    <main className="relative flex max-h-screen w-full flex-col items-center overflow-x-hidden lg:justify-center">
      <div className="max-w-6xl w-full h-screen">
        <div className="h-full flex items-start justify-center gap-4 overflow-hidden">
          <div className="relative h-full max-w-[400] w-full my-50 mx-10 ">
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
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground dark:text-[#4f4f4f]">
                  Full-Stack Developer
                </p>

                <motion.div
                  className="relative pt-2"
                  initial={false}
                  animate={{ height: isIntroExpanded ? 300 : 80 }}
                  transition={
                    hasIntroInteracted ? introLayoutTransition : noTransition
                  }
                >
                  <motion.p
                    className="overflow-hidden text-xl text-muted-foreground leading-9 tracking-tight dark:text-[#8f8f8f]"
                    style={{
                      height: "100%",
                    }}
                  >
                    {shortIntro}
                    <motion.span
                      className="inline"
                      animate={isIntroExpanded ? "visible" : "hidden"}
                      initial="hidden"
                      variants={longIntroVariants}
                    >
                      {longIntroWords.map((word, index) => (
                        <motion.span
                          className="mr-[0.25em] inline-block"
                          key={`${word}-${index}`}
                          variants={longIntroWordVariants}
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
                      hasIntroInteracted ? introLayoutTransition : noTransition
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
                    variants={backHeaderVariants}
                  >
                    <motion.button
                      variants={backButtonVariants}
                      transition={backButtonTransition}
                      onClick={closeLink}
                      className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-sm transition hover:bg-muted hover:shadow-md dark:border-white/10 dark:bg-[#171717] dark:hover:bg-[#222222]"
                    >
                      <motion.span
                        variants={backIconVariants}
                        transition={backIconTransition}
                      >
                        <FaChevronDown className="rotate-90 text-sm text-muted-foreground transition-transform" />
                      </motion.span>
                    </motion.button>

                    <motion.span
                      layoutId={`link-text-${expandedId}`}
                      className="text-2xl font-semibold tracking-tight text-foreground dark:text-[#f2f2f2]"
                      style={{ display: "block" }}
                      variants={backTitleVariants}
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
                    transition={delayedFadeTransition(shouldHideLinks, 0.2)}
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

          <div className="no-scrollbar flex w-4/6 flex-col h-full py-50 overflow-y-auto">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <div className="relative h-full max-w-2xl">
                  <motion.div
                    key={expandedId}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={fadeTransition}
                    ref={scrollRef}
                    className="h-full"
                  >
                    {SelectedSection ? <SelectedSection /> : null}
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: shouldHideLinks ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={delayedFadeTransition(shouldHideLinks)}
                  className="flex w-full items-start justify-center pt-10"
                  style={{
                    pointerEvents: shouldHideLinks ? "none" : "auto",
                  }}
                >
                  <p className="text-muted-foreground/50 text-sm "></p>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              initial="hidden"
              animate={isExpanded ? "hidden" : "visible"}
              exit="hidden"
              variants={portraitVariants}
              transition={portraitTransition}
              className={
                isExpanded
                  ? "pointer-events-none absolute bottom-0 -right-50 h-7/8 w-full"
                  : "absolute bottom-0 -right-50 h-7/8 w-full"
              }
            >
              <Image
                src="/portrait-upscaled.webp"
                className="h-full w-full object-contain"
                alt="Portrait of Saurav Shrestha"
                width={2595}
                height={2304}
                sizes="(min-width: 1024px) 67vw, 100vw"
                priority
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end gap-3 max-sm:hidden">
        <ThemeToggle />
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Saurav Shrestha. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}
