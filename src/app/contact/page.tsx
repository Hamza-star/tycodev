"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SendHorizonal } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (file) formData.append("file", file);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Thanks! We'll be in touch soon.");
        setForm({
          name: "",
          email: "",
          company: "",
          budget: "",
          timeline: "",
          message: "",
        });
        setFile(null);
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 py-28 text-foreground bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
        {/* Left: Heading & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Build Something Great Together
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Tell us about your project — whether you're launching a startup or
            scaling a business, we’re here to help bring your vision to life.
          </p>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground block mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground block mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground block mb-1">
                Company (optional)
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-border bg-background"
                placeholder="Enter your Company"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1">
                Budget Range
              </label>
              <input
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-border bg-background"
                placeholder="$2,000 - $10,000"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-1">
              Project Timeline
            </label>
            <input
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-border bg-background"
              placeholder="e.g. 4-6 weeks"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-background"
              placeholder="Tell us more about your idea or problem..."
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-2">
              Attach file (optional)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={handleFileChange}
              className="w-full file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          <div className="text-right pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}{" "}
              <SendHorizonal className="w-5 h-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
