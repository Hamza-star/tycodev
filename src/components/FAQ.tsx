"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { faqs as allFaqs } from "@/lib/faqs"; // Or define locally

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = allFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-12 lg:px-24 bg-background text-foreground"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about working with us.
        </p>
      </motion.div>

      {/* Search input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto mb-8 relative"
      >
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 rounded-md border border-border bg-background placeholder:text-muted-foreground"
        />
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-4 max-w-3xl mx-auto"
      >
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-muted-foreground">No results found.</p>
        ) : (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left text-lg font-medium bg-white/5 hover:bg-white/10 transition"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-muted-foreground text-base overflow-hidden"
                  >
                    <div>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        )}
      </motion.div>
    </section>
  );
}
