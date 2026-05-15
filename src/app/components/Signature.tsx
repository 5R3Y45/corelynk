import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "motion/react";

const signature = "Made by S.R.E.Y.A.S";

const characterLighting = [
  { delay: 2.2, duration: 2.35, settle: 4.7, idle: 7.5, variant: 4 },
  { delay: 1.15, duration: 1.8, settle: 3.35, idle: 8.2, variant: 2 },
  { delay: 2.85, duration: 1.65, settle: 4.45, idle: 6.7, variant: 5 },
  { delay: 1.62, duration: 1.45, settle: 3.05, idle: 9.2, variant: 1 },
  { delay: 0, duration: 0, settle: 0, idle: 0, variant: 0, spacer: true },
  { delay: 0.88, duration: 2.1, settle: 3.05, idle: 8.8, variant: 3 },
  { delay: 0.18, duration: 2.6, settle: 2.95, idle: 6.4, variant: 5 },
  { delay: 0, duration: 0, settle: 0, idle: 0, variant: 0, spacer: true },
  { delay: 1.96, duration: 1.9, settle: 3.9, idle: 7.8, variant: 2 },
  { delay: 0.72, duration: 1.25, settle: 2.15, idle: 5.9, variant: 6, dot: true },
  { delay: 1.34, duration: 2.25, settle: 4.15, idle: 6.9, variant: 3 },
  { delay: 2.72, duration: 1.15, settle: 4.05, idle: 8.6, variant: 6, dot: true },
  { delay: 0.54, duration: 1.55, settle: 2.5, idle: 7.1, variant: 1 },
  { delay: 3.08, duration: 1.1, settle: 4.35, idle: 9.4, variant: 6, dot: true },
  { delay: 0.08, duration: 2.95, settle: 3.15, idle: 6.2, variant: 5 },
  { delay: 2.36, duration: 1.2, settle: 3.82, idle: 8.1, variant: 6, dot: true },
  { delay: 1.04, duration: 2.85, settle: 4.18, idle: 5.8, variant: 4 },
  { delay: 3.42, duration: 0.95, settle: 4.58, idle: 7.4, variant: 6, dot: true },
  { delay: 1.78, duration: 1.72, settle: 3.72, idle: 6.5, variant: 2 },
];

export function Signature() {
  const [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsAwake(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.a
      href="https://sreyas.tech"
      target="_blank"
      rel="noreferrer"
      className={`signature-neon signature-neon-link ${isAwake ? "is-awake" : ""}`}
      aria-label={signature}
    >
      {signature.split("").map((character, index) => {
        const lighting = characterLighting[index];
        const isSpace = character === " ";

        return (
          <span
            key={`${character}-${index}`}
            aria-hidden="true"
            className={[
              "signature-neon__char",
              isSpace ? "signature-neon__char--space" : "",
              lighting.dot ? "signature-neon__char--dot" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            data-flicker={lighting.variant}
            style={
              {
                "--ignite-delay": `${lighting.delay}s`,
                "--ignite-duration": `${lighting.duration}s`,
                "--idle-delay": `${lighting.settle}s`,
                "--idle-duration": `${lighting.idle}s`,
              } as CSSProperties
            }
          >
            {isSpace ? "\u00a0" : character}
          </span>
        );
      })}
    </motion.a>
  );
}
