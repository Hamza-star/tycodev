"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SendHorizonal } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 py-20">
      <motion.div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          We’d love to hear about your project.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-md border border-white/10"
      >
        {/* name, email, message fields same as before */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-muted-foreground"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-muted-foreground"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-muted-foreground"
          >
            Your Message
          </label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about your project or idea..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}{" "}
            <SendHorizonal className="w-5 h-5" />
          </button>
        </div>
      </motion.form>
    </section>
  );
}
