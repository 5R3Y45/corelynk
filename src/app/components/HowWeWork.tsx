import { motion } from "motion/react";

const workflow = [
  {
    title: "Discovery",
    description: "Understanding your vision and technical requirements",
  },
  {
    title: "Strategy",
    description: "Architecting solutions aligned with your goals",
  },
  {
    title: "System Architecture",
    description: "Designing scalable and resilient infrastructure",
  },
  {
    title: "Development",
    description: "Building with precision and modern technologies",
  },
  {
    title: "Optimization",
    description: "Refining performance and user experience",
  },
  {
    title: "Deployment",
    description: "Launching with confidence and reliability",
  },
  {
    title: "Support",
    description: "Ongoing maintenance and evolution",
  },
];

export function HowWeWork() {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2
              className="uppercase mb-8 tracking-tighter"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 700,
                lineHeight: 0.95,
              }}
            >
              HOW WE WORK
            </h2>
            <p className="text-lg opacity-60 max-w-md">
              Our process is systematic, transparent, and designed to deliver exceptional results at
              every stage.
            </p>
          </div>

          <div className="space-y-12">
            {workflow.map((step, index) => (
              <WorkflowStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowStep({ step, index }: { step: typeof workflow[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      className="relative pl-8 pb-12"
      style={{
        borderLeft: isVisible
          ? "2px solid rgba(16, 185, 129, 0.4)"
          : "2px solid rgba(255, 255, 255, 0.2)",
        transition: "border-color 0.3s",
      }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      onViewportLeave={() => setIsVisible(false)}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative">
        <div
          className="absolute -left-[41px] top-0 w-3 h-3 rounded-full transition-all duration-300"
          style={{
            background: isVisible ? "#10b981" : "#ffffff",
            boxShadow: isVisible ? "0 0 12px rgba(16, 185, 129, 0.6)" : "none",
          }}
        />
        <h3
          className="uppercase tracking-tight mb-3"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 600,
          }}
        >
          {step.title}
        </h3>
        <p className="text-base opacity-70">{step.description}</p>
      </div>
    </motion.div>
  );
}

import { useState } from "react";
