import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import type { WorkExperience } from "../../types";
import { motion, useReducedMotion } from "framer-motion";

interface WorkExperienceSectionProps {
  workHistory: WorkExperience[];
}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  workHistory,
}) => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Timeline configuration
  const getTimelineColor = (index: number) => {
    const colors = [
      "from-blue-400 to-cyan-500",
      "from-purple-400 to-pink-500",
      "from-emerald-400 to-teal-500",
    ];
    return colors[index % colors.length];
  };

  // Intersection Observer for scroll-triggered timeline
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setActiveCard(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [workHistory]);

  // Click handler for timeline nodes
  const handleTimelineClick = (index: number) => {
    setActiveCard(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  if (!workHistory?.length) {
    return (
      <section
        aria-labelledby="work-exp-heading"
        className="p-6 rounded-xl border border-white/20 dark:border-gray-700/30 bg-white/30 dark:bg-gray-900/30 backdrop-blur"
      >
        <h3
          id="work-exp-heading"
          className="text-2xl font-bold text-center mb-2 text-text-default"
        >
          Work Experience
        </h3>
        <p className="text-center text-text-secondary">
          No experience to display yet.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="work-exp-heading" className="max-w-6xl mx-auto">
      <h3
        id="work-exp-heading"
        className="text-3xl font-bold text-center mb-12 text-text-default"
      >
        Career Timeline
      </h3>

      <div className="relative">
        {/* Timeline Column - Positioned Absolutely */}
        <div className="absolute left-0 top-0 bottom-0 w-32 flex flex-col items-center">
          {/* Timeline Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-emerald-500 rounded-full opacity-30 -translate-x-1/2" />

          {/* Timeline Nodes - Positioned to align with card centers */}
          {workHistory.map((_, idx) => {
            const isActive = activeCard === idx;
            const timelineColor = getTimelineColor(idx);

            return (
              <div
                key={idx}
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{
                  top: `${idx * 310 + 50}px`, // Position each node at the center of its corresponding card (increased spacing for full content)
                }}
              >
                {/* Timeline Node */}
                <motion.button
                  onClick={() => handleTimelineClick(idx)}
                  className={`relative w-10 h-10 rounded-full border-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 z-10 ${
                    isActive
                      ? `bg-gradient-to-r ${timelineColor} border-white dark:border-gray-900 shadow-lg scale-110`
                      : "bg-white/80 dark:bg-gray-800/80 border-white/60 dark:border-gray-700/60 hover:scale-105 hover:shadow-md"
                  }`}
                  initial={
                    prefersReducedMotion ? false : { scale: 0, opacity: 0 }
                  }
                  whileInView={
                    prefersReducedMotion ? {} : { scale: 1, opacity: 1 }
                  }
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  aria-label={`Navigate to job ${idx + 1}`}
                >
                  <div
                    className={`absolute inset-0 flex items-center justify-center font-bold text-sm ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Active pulse */}
                  {isActive && (
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${timelineColor} animate-ping opacity-20`}
                    />
                  )}
                </motion.button>

                {/* Connection Line to Card */}
                <div
                  className={`absolute left-10 top-5 w-8 h-0.5 bg-gradient-to-r ${timelineColor} opacity-50 ${isActive ? "opacity-80" : ""} transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>

        {/* Cards Column - With left margin for timeline */}
        <div className="ml-32 space-y-12">
          {workHistory.map((job, idx) => {
            const isActive = activeCard === idx;
            const timelineColor = getTimelineColor(idx);

            return (
              <motion.div
                key={`${job.company}-${job.title}-${idx}`}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                data-index={idx}
                className={`relative p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 ${
                  isActive
                    ? "bg-white/50 dark:bg-gray-900/50 border-white/40 dark:border-gray-600/40 shadow-2xl ring-2 ring-blue-400/20"
                    : "bg-white/40 dark:bg-gray-900/40 border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:bg-white/45 dark:hover:bg-gray-900/45"
                }`}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4
                      className={`text-xl font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text"
                          : "text-text-default"
                      }`}
                    >
                      {job.title}
                    </h4>
                    <div className="flex items-center gap-2 text-text-secondary text-sm mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-text-secondary text-sm bg-white/60 dark:bg-gray-800/60 px-3 py-2 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span>{job.duration}</span>
                  </div>
                </div>

                {/* Description - Show all bullet points */}
                {Array.isArray(job.description) &&
                  job.description.length > 0 && (
                    <ul className="space-y-3">
                      {job.description.map((desc, descIdx) => (
                        <li
                          key={descIdx}
                          className="flex items-start gap-3 text-text-secondary text-sm"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${timelineColor} mt-2 flex-shrink-0`}
                          />
                          <span>{desc}</span>
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
