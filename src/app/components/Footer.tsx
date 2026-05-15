import { motion } from "motion/react";
import { Signature } from "./Signature";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Team", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-7">
          {footerLinks.map((link, index) => (
            <motion.button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="uppercase tracking-wider text-sm opacity-60 hover:opacity-100 transition-opacity duration-300 relative group"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{
                  background: "#10b981",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                }}
              />
            </motion.button>
          ))}
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm opacity-40">&copy; 2026 CORELYNK. All rights reserved.</p>
          <Signature />
        </div>
      </div>
    </footer>
  );
}
