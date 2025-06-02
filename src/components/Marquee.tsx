"use client";

import { motion } from "framer-motion";

const companies = [
  "Scalable",
  "Secure",
  "Responsive",
  "SEO-friendly",
  "Modern UI",
  "Cross-platform",
  "Seamless",
];

export default function TextMarquee() {
  const duplicated = [...companies, ...companies]; // for infinite scroll

  return (
    <div className="relative w-full overflow-hidden bg-background py-3">
      {/* Side gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

      <motion.div
        className="flex min-w-max gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {duplicated.map((name, i) => (
          <span
            key={i}
            className="text-3xl md:text-5xl font-extrabold text-transparent px-4  "
            style={{
              WebkitTextStroke: "1px rgb(156 163 175)", // Tailwind gray-400
            }}
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
