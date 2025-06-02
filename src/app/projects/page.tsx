"use client";

import ServiceCTA from "@/components/services/ServiceCta";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Creative Portfolio Website",
    description:
      "A sleek portfolio for a freelance designer with animations and a CMS backend.",
    image: "/projects/portfolio.png",
    link: "#",
    tech: ["Next.js", "Tailwind", "Sanity.io"],
  },
  {
    title: "E-commerce Store",
    description: "Modern online store with payment gateway and admin panel.",
    image: "/projects/store.png",
    link: "#",
    tech: ["React", "Stripe", "MongoDB"],
  },
  {
    title: "Mobile App Landing",
    description: "Landing page for mobile app with scroll animations and CTA.",
    image: "/projects/app.png",
    link: "#",
    tech: ["Next.js", "GSAP", "Vercel"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-36 px-6 md:px-12 lg:px-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Work, Your Vision
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We design & develop digital products that elevate brands.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-blue-500 hover:underline mt-2"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ServiceCTA />
    </section>
  );
}
