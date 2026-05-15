import { useState } from "react";
import { motion } from "motion/react";
import { mainTeam } from "../data/content";
import type { TeamMember as TeamMemberType } from "../data/content";

export function Team() {
  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="uppercase mb-12 tracking-tighter"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          THE TEAM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 mb-16">
          {mainTeam.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        <div className="border-t border-white/10 pt-12">
          <h3
            className="uppercase mb-8 tracking-tight opacity-70"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              fontWeight: 600,
            }}
          >
            Design Partner
          </h3>
          <DesignPartner />
        </div>
      </div>
    </section>
  );
}

function TeamMember({ member, index }: { member: TeamMemberType; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasPortrait, setHasPortrait] = useState(true);

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative aspect-[1/0.82] mb-4 overflow-hidden sm:aspect-square sm:mb-3"
        style={{
          background: "#252931",
          border: isHovered ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid transparent",
          transition: "border-color 0.3s",
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: "linear-gradient(135deg, #252931 0%, #2d3139 100%)",
            filter: isHovered ? "brightness(1.3)" : "brightness(1)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${50 + index * 10}% ${50 + index * 15}%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`,
            }}
          />
        </div>
        {hasPortrait && (
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
            style={{
              filter: isHovered
                ? "grayscale(0.15) brightness(0.95) contrast(1.08)"
                : "grayscale(0.35) brightness(0.78) contrast(1.02)",
              opacity: isHovered ? 0.92 : 0.82,
            }}
            onError={() => setHasPortrait(false)}
          />
        )}
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4
          className="uppercase tracking-tight mb-1 text-base md:text-base"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
          }}
        >
          {member.name}
        </h4>
        <p className="text-sm opacity-60 sm:text-xs">{member.role}</p>
      </motion.div>
    </motion.div>
  );
}

function DesignPartner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="max-w-2xl cursor-pointer p-8"
      style={{
        background: "#252931",
        border: isHovered ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4
          className="uppercase tracking-tight mb-3"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 600,
            color: isHovered ? "#10b981" : "#ffffff",
            transition: "color 0.3s",
          }}
        >
          BrandBik Creatives
        </h4>
        <p className="text-base opacity-70">
          A creative studio focused on branding, visual identity, marketing, design systems, and
          digital presence.
        </p>
      </motion.div>
    </motion.div>
  );
}
