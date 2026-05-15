import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Team", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-8 left-8 z-50">
        <motion.button
          className="relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "rgba(37, 41, 49, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.2)",
            }}
          />
          <span
            className="relative text-xl font-bold"
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: "#10b981",
              textShadow: "0 0 10px rgba(16, 185, 129, 0.6)",
            }}
          >
            O
          </span>
        </motion.button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0, 0, 0, 0.42)", backdropFilter: "blur(2px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="fixed top-24 left-8 z-50 w-[13.5rem] rounded-md overflow-hidden"
              style={{
                background: "rgba(30, 34, 41, 0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(16, 185, 129, 0.18)",
                boxShadow:
                  "0 10px 26px rgba(0, 0, 0, 0.36), 0 0 18px rgba(16, 185, 129, 0.06)",
              }}
              initial={{ opacity: 0, y: -8, scale: 0.98, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, scale: 0.98, filter: "blur(5px)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    className="w-full px-5 py-2.5 text-left hover:bg-white/5 transition-colors duration-200 relative group"
                    onClick={() => handleMenuClick(item.href)}
                    initial={{ opacity: 0, y: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.04 + index * 0.025,
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{
                        boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                      }}
                    />
                    <span
                      className="uppercase tracking-wider text-sm"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
