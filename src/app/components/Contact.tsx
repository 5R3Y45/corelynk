import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="uppercase mb-16 tracking-tighter text-center"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            fontWeight: 700,
            lineHeight: 0.9,
            WebkitTextStroke: "2px #1a1d23",
            textShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          LET'S BUILD
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent py-4 px-2 text-lg focus:outline-none transition-colors duration-300"
              style={{
                borderBottom:
                  focusedField === "name"
                    ? "2px solid rgba(16, 185, 129, 0.6)"
                    : "2px solid rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent py-4 px-2 text-lg focus:outline-none transition-colors duration-300"
              style={{
                borderBottom:
                  focusedField === "email"
                    ? "2px solid rgba(16, 185, 129, 0.6)"
                    : "2px solid rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
          <div>
            <textarea
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={6}
              className="w-full bg-transparent py-4 px-2 text-lg focus:outline-none transition-colors duration-300 resize-none"
              style={{
                borderBottom:
                  focusedField === "message"
                    ? "2px solid rgba(16, 185, 129, 0.6)"
                    : "2px solid rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>

          <div className="text-center pt-8 flex flex-col items-center gap-4">
            <motion.button
              type="submit"
              className="group relative px-12 py-4 overflow-hidden"
              style={{
                border: "2px solid rgba(16, 185, 129, 0.5)",
                background: "transparent",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "#10b981",
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
                }}
              />
              <span
                className="relative uppercase tracking-wider text-lg transition-colors duration-300"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 600,
                  color: "#10b981",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1a1d23";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#10b981";
                }}
              >
                Send Message
              </span>
            </motion.button>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-3 overflow-hidden rounded-full"
              style={{
                border: "1px solid rgba(16, 185, 129, 0.4)",
                background: "rgba(16, 185, 129, 0.05)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                }}
              />
              <span
                className="relative uppercase tracking-wider text-sm transition-colors duration-300"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 500,
                  color: "#10b981",
                }}
              >
                Chat on WhatsApp
              </span>
            </motion.a>
          </div>
        </motion.form>

        <motion.div
          className="text-center mt-16 space-y-2 opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm">hello@corelynk.com</p>
          <p className="text-sm">+1 (555) 123-4567</p>
        </motion.div>
      </div>
    </section>
  );
}
