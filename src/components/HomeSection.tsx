import React, { lazy, Suspense } from "react";
import { ChevronDown } from "lucide-react";
import type { SectionProps } from "../types";
import { homeContent } from "../data";

const ProfileCard = lazy(() => import("./ProfileCard"));

interface HomeSectionProps extends SectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  darkMode,
  isVisible,
  scrollToSection,
}) => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative z-10 w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-default">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {homeContent.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-text-secondary">
                {homeContent.title}
              </p>
              <p className="text-lg mb-12 max-w-2xl mx-auto lg:mx-0 text-text-secondary">
                {homeContent.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection(homeContent.ctaButtons.primary.action)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  {homeContent.ctaButtons.primary.text}
                </button>
                <button
                  onClick={() => scrollToSection(homeContent.ctaButtons.secondary.action)}
                  className="px-8 py-3 border-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm border-border text-text-secondary hover:bg-background-card/50"
                >
                  {homeContent.ctaButtons.secondary.text}
                </button>
              </div>
            </div>

            {/* Profile Card */}
            <div className="hidden lg:block lg:max-w-md xl:max-w-lg mx-auto">
              <Suspense
                fallback={
                  <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-500/10 animate-pulse" />
                }
              >
                {isVisible && (
                  <ProfileCard
                    name="Zay Min Khant"
                    title="Full Stack Developer"
                    handle="zayminkhant"
                    status="Available for Projects"
                    contactText="Contact Me"
                    avatarUrl="/images/avatar.png"
                    iconUrl="/images/code-icon.png"
                    grainUrl="/images/code-icon.png"
                    showUserInfo={true}
                    enableTilt={true}
                    darkMode={darkMode}
                    onContactClick={() => scrollToSection("contact")}
                  />
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown
          className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        />
      </div>
    </section>
  );
};

export default HomeSection;
