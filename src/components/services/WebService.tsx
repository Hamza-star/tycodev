"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ServiceCTA from "@/components/services/ServiceCta";
import webDevSeo from "@/app/seo/webDev";

export async function generateMetadata() {
  return webDevSeo;
}

export default function WebService() {
  return (
    <section className="text-foreground">
      {/* Header Image with Overlay */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden mb-12">
        <Image
          src="/services/web-app.png"
          alt="Web development header"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold px-6 text-center max-w-4xl">
            Modern Web Application Development Solutions
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-20">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Crafting Scalable & Responsive Web Apps
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Our team specializes in building custom web applications using
            modern frameworks and industry best practices. Whether you're a
            startup or an enterprise, we tailor solutions to meet your unique
            needs with performance, scalability, and security in mind.
          </p>

          <Image
            src="/services/web-app.png"
            alt="Web service visual"
            width={1000}
            height={500}
            className="rounded-xl shadow-md mb-12"
          />
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
          <ul className="space-y-3 text-muted-foreground text-lg">
            {[
              "Fully responsive user interfaces (UI/UX)",
              "Custom dashboards & admin panels",
              "RESTful APIs & third-party integrations",
              "Authentication, security & SEO optimization",
              "Ongoing support and feature enhancements",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Industries We Serve</h3>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            We build tailored web applications across a wide range of
            industries, helping businesses automate workflows, reach users, and
            grow digitally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              "E-commerce",
              "Healthcare",
              "Education",
              "Real Estate",
              "Finance",
              "Travel",
              "Legal Services",
              "Startups",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-muted text-foreground py-3 px-4 rounded-md text-center shadow-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Block */}
        <ServiceCTA />
      </div>
    </section>
  );
}
