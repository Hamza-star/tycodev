"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web App Development",
    description:
      "Build secure and scalable web apps using the latest technologies tailored to your business goals.",
    image: "/services/web-app.png",
    link: "/services/web-app",
  },
  {
    title: "Mobile App Development",
    description:
      "Craft beautiful cross-platform apps for iOS and Android with high performance and great UX.",
    image: "/services/mobile-app.png",
    link: "/services/mobile-app",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your brand online through SEO, paid campaigns, and social media strategies.",
    image: "/services/digital-marketing.jpg",
    link: "/services/digital-marketing",
  },
];

export default function ServicesCards() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-neutral-900 dark:text-white">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl bg-white dark:bg-neutral-900 transition-all duration-500"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {service.title}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-neutral-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-5">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-block px-5 py-2 bg-blue-600 text-white text-sm rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
