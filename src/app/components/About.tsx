import { useEffect, useRef, useState } from "react";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);

  const text =
    "We engineer digital systems that power modern businesses. From custom platforms to intelligent automation, we build the technological core that scales with your ambition. Every line of code, every interface, every integration is crafted with precision and purpose.";

  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionMiddle = rect.top + rect.height / 2;
      const viewportMiddle = windowHeight / 2;

      const distanceFromCenter = viewportMiddle - sectionMiddle;
      const maxDistance = windowHeight;

      const scrollProgress = Math.max(0, Math.min(1, (distanceFromCenter + maxDistance * 0.3) / (maxDistance * 0.8)));

      const currentWordIndex = Math.floor(scrollProgress * words.length) - 1;
      setActiveWordIndex(currentWordIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-5xl">
        <h2
          className="uppercase mb-16 tracking-tighter"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          ABOUT
        </h2>
        <p className="text-2xl md:text-4xl leading-relaxed">
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-200 mr-3"
              style={{
                color: index <= activeWordIndex ? "#ffffff" : "#505050",
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
