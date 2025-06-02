"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    label: "Projects Completed",
    value: 10,
    gradient: ["#3182ce", "#3182ce"],
  },
  {
    icon: Clock,
    label: "Years Experience",
    value: 1,
    gradient: ["#3182ce", "#3182ce"],
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: 8,
    gradient: ["#3182ce", "#3182ce"],
  },
];

export default function AnimatedCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background text-foreground">
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto"
      >
        {stats.map((item, index) => {
          const Icon = item.icon;
          const gradientId = `grad-${index}`;

          return (
            <div
              key={index}
              className="relative rounded-2xl p-6 lg:p-8 bg-card shadow-md text-center space-y-5 border border-border"
            >
              {/* Always-on animated glowing border */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl before:content-[''] before:absolute before:inset-[-2px] before:rounded-[inherit] before:bg-[conic-gradient(from_0deg,_var(--tw-gradient-stops))] before:from-cyan-500 before:via-fuchsia-500 before:to-blue-500 before:animate-spin-slow"
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "2px",
                }}
              />

              {/* Icon with Circular Full Gradient Ring */}
              <div className="relative w-20 h-20 mx-auto">
                <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                  <defs>
                    <linearGradient
                      id={gradientId}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor={item.gradient[0]} />
                      <stop offset="100%" stopColor={item.gradient[1]} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Background Circle */}
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="none"
                  />
                  {/* Full Progress Circle with Gradient */}
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 34}
                    strokeDashoffset={0}
                    style={{
                      filter: "url(#glow)",
                      transition: "stroke-dashoffset 1s ease",
                    }}
                  />
                </svg>
                <Icon className="w-7 h-7 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
              </div>

              {/* CountUp Number */}
              <div className="text-4xl md:text-5xl font-bold text-primary relative z-10">
                {isInView ? (
                  <CountUp end={item.value} duration={1.6} suffix="+" />
                ) : (
                  "0+"
                )}
              </div>

              {/* Label */}
              <p className="text-muted-foreground font-medium text-sm md:text-base relative z-10">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
