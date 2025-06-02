"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-background text-foreground py-44 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: -0.12 }}
          className="text-center md:text-left space-y-6 flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Grow & Scale</span>
              <span className="absolute inset-0 bg-blue-600 rounded-sm animate-fill-left z-0" />
            </span>{" "}
            Your Business
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-lg max-w-xl"
          >
            We design, develop, and deliver digital solutions that make your
            brand unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link href="/contact">
              <Button size="lg" className="gap-2 cursor-pointer">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/about">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE - Visible on All Screen Sizes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1 flex justify-center w-full"
        >
          <div className="relative w-full max-w-sm md:max-w-lg h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/services/web-app.png" // ✅ Replace with your image path
              alt="Hero preview"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
