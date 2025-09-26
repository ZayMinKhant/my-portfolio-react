import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Briefcase, Calendar } from "lucide-react";
import type { WorkExperience } from "../../types";
import { motion, useReducedMotion } from "framer-motion";

// Constants
const TIMELINE_COLORS = [
  "from-blue-400 to-cyan-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
];

const MEASUREMENT_DELAY = 200;

interface WorkExperienceSectionProps {
  workHistory: WorkExperience[];
}

// Helper functions
const getTimelineColor = (index: number): string => {
  return TIMELINE_COLORS[index % TIMELINE_COLORS.length];
};

const getStartYear = (duration: string): string => {
  const match = duration.match(/\b(\d{4})\b/);
  return match ? match[1] : '';
};

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  workHistory,
}) => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [nodePositions, setNodePositions] = useState<number[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // Refs for measurement
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const gutterRef = useRef<HTMLDivElement | null>(null);

  // Measurement logic
  useLayoutEffect(() => {
    let ro: ResizeObserver | null = null;

    const measure = () => {
      const gutter = gutterRef.current;
      if (!gutter) return;

      const gutterTop = gutter.getBoundingClientRect().top + window.scrollY;

      const next = cardRefs.current.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        const cardCenterY = r.top + window.scrollY + r.height / 2;
        return cardCenterY - gutterTop - ( window.innerWidth > 768 ? 92 : 0); // top offset within gutter
      });

      setNodePositions(next);
    };

    // Initial measure with delay to ensure DOM is ready
    const timeoutId = setTimeout(measure, MEASUREMENT_DELAY);

    // Observe layout changes
    ro = new ResizeObserver(() => {
      requestAnimationFrame(measure);
    });
    if (gutterRef.current) ro.observe(gutterRef.current);
    cardRefs.current.forEach((el) => el && ro!.observe(el));

    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timeoutId);
      ro?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [workHistory.length]);

  // Scroll-driven active card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setActiveCard(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [workHistory.length]);

  // Click handler for nodes
  const handleTimelineClick = (index: number) => {
    setActiveCard(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (!workHistory?.length) {
    return (
      <section
        aria-labelledby="work-exp-heading"
        className="p-6 rounded-xl border border-white/20 dark:border-gray-700/30 bg-white/30 dark:bg-gray-900/30 backdrop-blur"
      >
        <h3 id="work-exp-heading" className="text-2xl font-bold text-center mb-2">
          Work Experience
        </h3>
        <p className="text-center text-text-secondary">No experience to display yet.</p>
      </section>
    );
  }

  // Ensure refs array has correct length
  if (cardRefs.current.length !== workHistory.length) {
    cardRefs.current = new Array(workHistory.length).fill(null);
  }

  return (
    <section aria-labelledby="work-exp-heading" className="max-w-6xl">
      <h3
        id="work-exp-heading"
        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-text-default"
      >
        Career Timeline
      </h3>

      <div className="relative flex gap-x-3 w-full min-w-0">
        {/* Timeline gutter */}
        <div ref={gutterRef} className="relative w-[clamp(1.25rem,5vw,2.5rem)] sm:w-[clamp(2rem,7vw,4.5rem)] flex-shrink-0">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-500 to-emerald-500 opacity-40 -translate-x-1/2" />
          {/* Nodes positioned by measured centers */}
          <TimelineNodes
            positions={nodePositions}
            activeCard={activeCard}
            onClick={handleTimelineClick}
            prefersReducedMotion={!!prefersReducedMotion}
            workHistory={workHistory}
          />
        </div>

        {/* Cards column */}
        <div className="space-y-6 sm:space-y-8 flex-1 max-w-[calc(100%_-_40px)] w-full sm:max-w-[calc(100%_-_88px)]">
          {workHistory.map((job, idx) => {
            const isActive = activeCard === idx;
            const timelineColor = getTimelineColor(idx);
            return (
              <motion.div
                key={`${job.company}-${job.title}-${idx}`}
                ref={(el) => { cardRefs.current[idx] = el; }}
                data-index={idx}
                className={`relative w-auto max-w-full p-3 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-lg border transition-all duration-500 ${
                  isActive
                    ? "bg-white/50 dark:bg-gray-900/50 border-white/40 dark:border-gray-600/40 shadow-2xl ring-2 ring-blue-400/20"
                    : "bg-white/40 dark:bg-gray-900/40 border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:bg-white/45 dark:hover:bg-gray-900/45"
                }`}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                  <div className="min-w-0 flex-1 pr-2">
                    <h4
                      className={`text-base sm:text-xl font-bold transition-colors duration-300 leading-tight ${
                        isActive
                          ? "text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text"
                          : "text-text-default"
                      }`}
                    >
                      {job.title}
                    </h4>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-text-secondary text-xs sm:text-sm mt-0.5 sm:mt-1">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate min-w-0">{job.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 text-text-secondary text-xs sm:text-sm bg-white/60 dark:bg-gray-800/60 px-2 sm:px-3 py-1 sm:py-2 rounded-md sm:rounded-lg self-start shrink-0">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{job.duration}</span>
                  </div>
                </div>

                {/* Description */}
                {Array.isArray(job.description) && job.description.length > 0 && (
                  <ul className="space-y-1.5 sm:space-y-3">
                    {job.description.map((desc, descIdx) => (
                      <li
                        key={descIdx}
                        className="flex items-start gap-2 sm:gap-3 text-text-secondary text-xs sm:text-sm leading-relaxed"
                      >
                        <div
                          className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${timelineColor} mt-1.5 sm:mt-2 flex-shrink-0`}
                        />
                        <span className="min-w-0 leading-tight sm:leading-relaxed">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;

/* --- Timeline Nodes Component --- */
interface TimelineNodesProps {
  positions: number[];
  activeCard: number;
  onClick: (i: number) => void;
  prefersReducedMotion: boolean;
  workHistory: WorkExperience[];
}

const TimelineNodes: React.FC<TimelineNodesProps> = ({
  positions,
  activeCard,
  onClick,
  prefersReducedMotion,
  workHistory,
}) => {
  return (
    <>
      {positions.map((top, idx) => {
        const isActive = activeCard === idx;
        const timelineColor = getTimelineColor(idx);
        const startYear = getStartYear(workHistory[idx]?.duration || '');
        
        return (
          <div
            key={idx}
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ top }}
          >
            <motion.button
              onClick={() => onClick(idx)}
              className={`relative w-7 h-7 sm:w-9 sm:h-9 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/40 z-10 ${
                isActive
                  ? `bg-gradient-to-r ${timelineColor} border-white dark:border-gray-900 shadow-lg scale-110`
                  : "bg-white/80 dark:bg-gray-800/80 border-white/60 dark:border-gray-700/60 hover:scale-105 hover:shadow-md"
              }`}
              initial={prefersReducedMotion ? false : { scale: 0.85, opacity: 0 }}
              whileInView={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              aria-label={`Navigate to job ${idx + 1}`}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center font-semibold text-[8px] sm:text-[12px] ${
                  isActive ? "text-white" : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {startYear || idx + 1}
              </div>

              {isActive && (
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${timelineColor} animate-ping opacity-20`}
                />
              )}
            </motion.button>

            {/* Small connector towards the cards */}
            <div
              className={`absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-3 sm:w-6 h-px bg-gradient-to-r ${timelineColor} ${
                isActive ? "opacity-80" : "opacity-50"
              } transition-opacity`}
            />
          </div>
        );
      })}
    </>
  );
};
