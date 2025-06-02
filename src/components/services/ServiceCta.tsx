// components/services/ServiceCTA.tsx
"use client";

import { motion } from "framer-motion";

export default function ServiceCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 flex justify-center"
    >
      <div className="w-full max-w-5xl px-8 py-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Let’s Build Your Dream Project
        </h3>
        <p className="mb-6 text-lg">
          From strategy to deployment, we’re ready to be your digital partner.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </motion.div>
  );
}
