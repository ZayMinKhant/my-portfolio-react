import React from "react";

const LightweightBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{ zIndex: -1 }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 transition-opacity duration-1000 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950" />

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-dots dark">
          {/* Generate fewer, simpler dots */}
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30 grid-dark"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-symbols dark">
          {["{}", "</>", "()", "[]", "=>", "!=", "++", "--"].map(
            (symbol, i) => (
              <div
                key={i}
                className="symbol"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 30}%`,
                  animationDelay: `${i * 3}s`,
                  animationDuration: `${20 + i * 2}s`,
                }}
              >
                {symbol}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default LightweightBackground;
