"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projectData } from "@/data/projects";
import Image from "next/image";

const categories = ["All", "Web", "Mobile"] as const;
const ITEMS_PER_PAGE = 6;

type Category = (typeof categories)[number];

type Project = {
  id: string;
  title: string;
  description: string;
  category: Category;
  image: string;
  tech: string[];
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [page, setPage] = useState(1);

  const filtered =
    filter === "All"
      ? projectData
      : projectData.filter((proj) => proj.category === filter);

  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = filtered.length > page * ITEMS_PER_PAGE;

  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore the work we've delivered for forward-thinking brands.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-background text-muted-foreground border-border"
              } hover:bg-blue-600 hover:text-white`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {paginated.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              className="cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="aspect-[16/9] relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 rounded-t-2xl"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-4">
          <div className="relative max-w-3xl w-full bg-background p-6 rounded-xl border border-border">
            <button
              className="absolute top-3 right-3 z-50 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition"
              onClick={() => setSelected(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full aspect-[16/9] mb-4">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="text-muted-foreground mb-4">{selected.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {selected.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
