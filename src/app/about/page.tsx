"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("../../components/LottiePlayer"), {
  ssr: false,
});

export default function About() {
  return (
    <section className="bg-background text-foreground">
      {/* Header Image with overlay */}
      <div className="relative h-64 md:h-96 w-full mt-20 overflow-hidden">
        <img
          src="/images/about.jpg"
          alt="About header"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold px-6 text-center max-w-4xl">
            Discover How We Can Help Your Business Thrive
          </h1>
        </div>
      </div>

      <div className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* About Content: Text + Lottie animation */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">About Us</h2>

            <p className="text-lg max-w-xl text-muted-foreground">
              Tyco Developers deliver top-notch digital solutions that empower
              your business to grow and succeed in a competitive market. Our
              team is committed to quality, innovation, and customer
              satisfaction.
            </p>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-lg max-w-md">
                {[
                  "Expert team with years of experience",
                  "Tailored solutions to fit your needs",
                  "Cutting-edge technology and tools",
                  "Transparent communication and support",
                  "Proven track record of success",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Lottie animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <LottieAnimation />
          </motion.div>
        </div>

        <AnimatedCounter />
        <FAQ />
      </div>
    </section>
  );
}
