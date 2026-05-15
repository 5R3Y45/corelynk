import { motion } from "motion/react";

const values = ["Precision", "Scalability", "Reliability", "Clarity", "Performance"];

export function CoreValues() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="uppercase mb-20 tracking-tighter text-center"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          CORE VALUES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <FlickerValue key={value} value={value} delay={index * 0.3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlickerValue({ value, delay }: { value: string; delay: number }) {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      <motion.div
        className="text-4xl md:text-6xl font-bold uppercase tracking-tight"
        style={{ fontFamily: "'Oswald', sans-serif" }}
        initial={{ opacity: 0.2 }}
        whileInView={{
          opacity: [0.2, 0.3, 0.2, 0.4, 0.3, 0.5, 0.4, 0.7, 0.6, 1],
          textShadow: [
            "0 0 0px rgba(16, 185, 129, 0)",
            "0 0 5px rgba(16, 185, 129, 0.3)",
            "0 0 2px rgba(16, 185, 129, 0.2)",
            "0 0 8px rgba(16, 185, 129, 0.5)",
            "0 0 4px rgba(16, 185, 129, 0.3)",
            "0 0 12px rgba(16, 185, 129, 0.6)",
            "0 0 6px rgba(16, 185, 129, 0.4)",
            "0 0 15px rgba(16, 185, 129, 0.4)",
            "0 0 10px rgba(16, 185, 129, 0.3)",
            "0 0 8px rgba(16, 185, 129, 0.2)",
          ],
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1.5,
          delay: delay + 0.2,
          times: [0, 0.1, 0.15, 0.25, 0.3, 0.45, 0.5, 0.7, 0.85, 1],
        }}
      >
        {value}
      </motion.div>
    </motion.div>
  );
}
