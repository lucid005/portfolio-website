"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const openLink = (id: number, index?: number) => {
    if (isTransitionLocked) {
      return;
    }

    const nextIndex =
      index ?? portfolioSections.findIndex((section) => section.id === id);

    if (nextIndex >= 0) {
      setActiveIndex(nextIndex);
    }

    setExpandedId(id);
    setIsIntroExpanded(false);
    setIsMobileMenuOpen(false);
  };

  const closeLink = () => {
    setIsClosing(true);
    setExpandedId(null);
    setIsMobileMenuOpen(false);
    window.setTimeout(() => setIsClosing(false), 260);
  };

  const toggleIntro = () => {
    setHasIntroInteracted(true);
    setIsMobileMenuOpen(false);
    setIsIntroExpanded((current) => !current);
  };

  const shortIntro = `FullStack Web Developer Focused on Clean, Functional Design. `;
  const longIntro = `Passionate about crafting clean, functional web experiences. With a focus on frontend development, I turn thoughtful designs into seamless digital realities. I like interfaces that feel calm, purposeful, and easy to understand.`;
  const longIntroWords = longIntro.trim().split(" ");

  return (
    <main className="relative h-svh overflow-x-hidden bg-background text-foreground">
      {!isExpanded ? (
        <button
          aria-expanded={isMobileMenuOpen}
          aria-label="Open section menu"
          className="fixed right-6 top-6 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background/90 text-muted-foreground shadow-sm backdrop-blur transition hover:text-foreground dark:border-white/10 dark:bg-[#111111]/90 lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
          type="button"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      ) : null}

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            aria-modal="true"
            className="fixed inset-0 z-[60] flex items-start justify-end bg-background/70 p-5 backdrop-blur-sm lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            role="dialog"
            transition={fadeTransition}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full max-w-80 overflow-hidden rounded-2xl border border-border bg-background shadow-xl dark:border-white/10 dark:bg-[#111111]"
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              initial={{ opacity: 0, scale: 0.98, y: -8 }}
              onClick={(event) => event.stopPropagation()}
              transition={fadeTransition}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3 dark:border-white/10">
                <span className="text-sm font-medium text-foreground">
                  Menu
                </span>
                <button
                  aria-label="Close section menu"
                  className="flex size-8 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition z-50 hover:bg-muted hover:text-foreground dark:hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  type="button"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>

              <nav className="p-2">
                {portfolioSections.map((section, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition hover:bg-muted/60 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground dark:text-[#7a7a7a]"
                      }`}
                      key={section.id}
                      onClick={() => {
                        openLink(section.id, index);
                      }}
                      type="button"
                    >
                      <span>{section.name}</span>
                      {isActive ? (
                        <FaExpandAlt
                          className="size-3 text-muted-foreground"
                          aria-hidden="true"
                        />
                      ) : null}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative mx-auto flex h-svh w-full items-center px-5 flex-col lg:grid lg:max-w-6xl lg:grid-cols-[minmax(300px,400px)_minmax(0,1fr)] lg:gap-4 lg:px-10 lg:py-0">
        <aside
          className={`relative z-10 w-full max-w-100 flex-col pt-10 sm:pt-16 lg:pt-50 lg:h-svh lg:pb-16 ${
            isExpanded ? "hidden lg:flex" : "flex"
          }`}
        >
          <div
            className="relative h-[25rem] px-0 lg:px-3 lg:h-[15.625rem]"
          >
            <motion.div
              layout
              className="relative z-10"
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
                <h1 className="text-xl lg:text-2xl font-medium tracking-tight">
                  Saurav Shrestha
                </h1>

                <motion.div
                  className={`${isIntroExpanded ? "w-full" : "max-w-80"} relative mt-3 lg:w-full lg:max-w-full`}
                  initial={false}
                  transition={
                    hasIntroInteracted ? introLayoutTransition : noTransition
                  }
                >
                  <motion.p
                    className="overflow-hidden text-lg tracking-tight text-muted-foreground dark:text-[#8f8f8f] sm:text-xl lg:text-2xl"
                    animate={{ height: isIntroExpanded ? "auto" : 80 }}
                    initial={false}
                    transition={
                      hasIntroInteracted ? introLayoutTransition : noTransition
                    }
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
                    className="mt-5 flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground dark:text-[#7a7a7a] dark:hover:text-[#f2f2f2]"
                    onClick={toggleIntro}
                    type="button"
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

            <div className="absolute left-3 top-0 hidden w-[calc(100%-1.5rem)] lg:block">
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
                      type="button"
                    >
                      <motion.span
                        variants={backIconVariants}
                        transition={backIconTransition}
                      >
                        <FaChevronDown className="rotate-90 text-sm text-muted-foreground transition-transform" />
                      </motion.span>
                    </motion.button>

                    <motion.span
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
          </div>

          <nav className="hidden w-full flex-col items-start gap-2 lg:flex">
            {!isExpanded
              ? portfolioSections.map((section, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <motion.button
                      key={section.id}
                      className={`relative flex w-full cursor-pointer items-center px-4 py-2.5 text-lg font-medium transition sm:w-5/6 ${
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
                          shouldHideLinks || isTransitionLocked
                            ? "none"
                            : "auto",
                      }}
                      onClick={() => openLink(section.id, index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      type="button"
                    >
                      {isActive && !shouldHideLinks && (
                        <motion.div
                          layoutId="active-link-pill"
                          className="absolute inset-0 rounded-2xl border-2 border-white bg-card shadow-sm dark:border-white/10 dark:bg-[#171717]"
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
                })
              : null}
          </nav>
        </aside>

        <section
          className={`relative flex w-full flex-col ${
            isExpanded ? "min-h-screen" : "min-h-0"
          } lg:h-svh lg:min-h-0`}
        >
          <div
            ref={scrollRef}
            className={`no-scrollbar relative z-20 flex w-full flex-col ${
              isExpanded
                ? "min-h-screen px-5 pt-8 pb-32 sm:px-10 lg:py-50"
                : "py-0 lg:py-50"
            } lg:h-screen lg:min-h-0 lg:overflow-y-auto lg:px-0`}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <div className="relative mx-auto flex min-h-[calc(100svh-3rem)] w-full max-w-2xl flex-col lg:mx-0 lg:block lg:min-h-full lg:pb-0">
                  <motion.div
                    key={expandedId}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={fadeTransition}
                    className="flex min-h-full flex-1 flex-col lg:block"
                  >
                    <div className="mb-8 text-center lg:hidden">
                      <motion.h2
                        className="text-2xl font-semibold tracking-tight text-foreground dark:text-[#f2f2f2]"
                        transition={textMorphTransition}
                      >
                        {expandedSection?.name}
                      </motion.h2>
                    </div>

                    <div className="w-full flex-1 pb-10 lg:block lg:pb-0">
                      {SelectedSection ? <SelectedSection /> : null}
                    </div>

                    <div className="mt-auto flex w-full flex-col items-end gap-3 pt-8 pb-4 text-right lg:hidden">
                      <ThemeToggle />
                      <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Saurav Shrestha. All
                        rights reserved.
                      </p>
                    </div>

                    <button
                      aria-label="Close section"
                      className="fixed bottom-6 left-1/2 z-40 flex size-14 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/95 text-muted-foreground shadow-lg backdrop-blur transition hover:text-foreground dark:border-white/10 dark:bg-[#171717]/95 dark:hover:text-[#f2f2f2] lg:hidden"
                      onClick={closeLink}
                      type="button"
                    >
                      <X className="size-5" aria-hidden="true" />
                    </button>
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: shouldHideLinks ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={delayedFadeTransition(shouldHideLinks)}
                  className="hidden w-full items-start justify-center pt-10 lg:flex"
                  style={{
                    pointerEvents: shouldHideLinks ? "none" : "auto",
                  }}
                >
                  <p className="text-sm text-muted-foreground/50"></p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={portraitVariants}
            transition={portraitTransition}
            className={`${isExpanded ? "hidden" : ""} pointer-events-none fixed bottom-0 right-1/2 z-0 h-100 w-120 translate-x-1/2 sm:h-110 sm:w-160 lg:absolute lg:-right-50 lg:h-200 lg:w-250 lg:translate-x-0`}
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
        </section>
      </div>

      <div
        className={`absolute bottom-4 right-5 z-30 flex-col items-end gap-3 ${
          isExpanded ? "hidden lg:flex" : "flex "
        }`}
      >
        <ThemeToggle />
        <p className="text-xs text-muted-foreground ">
          &copy; {new Date().getFullYear()} Saurav Shrestha. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}
