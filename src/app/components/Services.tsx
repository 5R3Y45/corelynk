import { motion } from "motion/react";
import { useState } from "react";

const services = [
  "Custom Software Systems",
  "ERP Platforms",
  "Workflow Automation",
  "AI Integrations",
  "Dashboard Systems",
  "Web Platforms",
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="uppercase mb-20 tracking-tighter"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          SERVICES
        </h2>
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceItem key={service} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }: { service: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer pb-8 relative"
      style={{
        borderBottom: isHovered
          ? "1px solid rgba(16, 185, 129, 0.4)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        transition: "border-color 0.3s",
      }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
          style={{
            background: "#10b981",
            boxShadow: "0 0 12px rgba(16, 185, 129, 0.6)",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <h3
        className="uppercase tracking-tighter transition-all duration-300"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 600,
          textShadow: isHovered ? "0 0 20px rgba(16, 185, 129, 0.4)" : "0 0 0px rgba(16, 185, 129, 0)",
        }}
      >
        {service}
      </h3>
    </motion.div>
  );
}
