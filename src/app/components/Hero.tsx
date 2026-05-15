import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

const logo = "CORELYNK";

const ruptureMap = [
  { x: -190, y: -72, rotate: -12, trail: -72 },
  { x: -122, y: 92, rotate: 9, trail: -48 },
  { x: -58, y: -118, rotate: -7, trail: -30 },
  { x: 22, y: 112, rotate: 6, trail: 24 },
  { x: 76, y: -84, rotate: -8, trail: 36 },
  { x: 138, y: 78, rotate: 11, trail: 54 },
  { x: 206, y: -52, rotate: 13, trail: 78 },
  { x: 264, y: 34, rotate: -10, trail: 92 },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const letterAnimation = prefersReducedMotion
    ? {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }
    : {
        opacity: [0, 1, 1, 0.88, 1, 1],
        x: logo.split("").map(() => 0),
        y: [12, 0, 0, 0, 0, 0],
        filter: [
          "blur(12px)",
          "blur(0px)",
          "blur(0px)",
          "blur(1.8px)",
          "blur(0.4px)",
          "blur(0px)",
        ],
      };

  return (
    <section id="home" className="hero-rupture relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-rupture__grain" />
      <motion.div
        className="hero-rupture__reactor"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{
          opacity: prefersReducedMotion ? 0.18 : [0.05, 0.16, 0.08, 0.22, 0.14],
          scale: prefersReducedMotion ? 1 : [0.86, 1, 1.08, 1.02, 1],
        }}
        transition={{ duration: 4.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="hero-rupture__scan"
        initial={{ opacity: 0 }}
        animate={{ opacity: prefersReducedMotion ? 0 : [0, 0.16, 0.04, 0.12, 0.05] }}
        transition={{ duration: 4.2, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1
            className="hero-rupture__logo uppercase tracking-tighter mb-8"
            aria-label={logo}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(4rem, 15vw, 12rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              WebkitTextStroke: "2px #1a1d23",
            }}
          >
            {logo.split("").map((letter, index) => {
              const rupture = ruptureMap[index];
              const isLeft = index < logo.length / 2;
              const delay = 0.12 + index * 0.018;

              return (
                <motion.span
                  key={`${letter}-${index}`}
                  className="hero-rupture__letter"
                  aria-hidden="true"
                  data-letter={letter}
                  style={
                    {
                      "--trail-x": `${rupture.trail}px`,
                    } as CSSProperties
                  }
                  initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
                  animate={
                    prefersReducedMotion
                      ? letterAnimation
                      : {
                          opacity: [0, 1, 1, 0.86, 0.98, 1, 1],
                          x: [0, 0, rupture.x, rupture.x * 0.72, 0, isLeft ? -2 : 2, 0],
                          y: [12, 0, rupture.y, rupture.y * 0.54, 0, 1, 0],
                          rotate: [0, 0, rupture.rotate, rupture.rotate * 0.35, 0, isLeft ? -0.4 : 0.4, 0],
                          scale: [0.98, 1, 1, 0.985, 1.018, 0.998, 1],
                          filter: [
                            "blur(12px)",
                            "blur(0px)",
                            "blur(0px)",
                            "blur(2px)",
                            "blur(0.5px)",
                            "blur(0px)",
                            "blur(0px)",
                          ],
                        }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 4.35,
                    delay,
                    times: [0, 0.16, 0.31, 0.48, 0.72, 0.79, 1],
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            className="text-lg md:text-2xl tracking-[0.3em] uppercase opacity-70 mb-4"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300 }}
            initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
            animate={{ opacity: 0.7, y: 0, filter: "blur(0px)" }}
            transition={{ delay: prefersReducedMotion ? 0 : 3.65, duration: 0.85, ease: "easeOut" }}
          >
            BUILDING YOUR CORE
          </motion.p>
          <motion.p
            className="text-sm md:text-base max-w-2xl mx-auto opacity-60"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 3.9, duration: 0.85, ease: "easeOut" }}
          >
            Precision-engineered systems for the next generation
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
