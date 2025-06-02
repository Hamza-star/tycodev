"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

import { usePathname } from "next/navigation";

const services = [
  {
    title: "Web App Development",
    description: "Scalable, secure apps built for your business needs.",
    image: "/services/web-app.png",
    href: "/services/web-app",
  },
  {
    title: "Mobile App Development",
    description: "iOS & Android apps with great UX and performance.",
    image: "/services/mobile-app.png",
    href: "/services/mobile-app",
  },
  {
    title: "Digital Marketing",
    description: "SEO, social media, and campaigns to grow your brand.",
    image: "/services/digital-marketing.jpg",
    href: "/services/digital-marketing",
  },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="backdrop-blur-xl bg-white/50 dark:bg-zinc-950 border-b shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={20} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-600 dark:text-white font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-600 dark:hover:text-blue-400 transition`}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-1 text-gray-700 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Services
            </button>

            {showDropdown && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[420px] bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden z-50">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                    onClick={() => setShowDropdown(false)} // close on link click
                  >
                    <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 ${
                pathname === link.href
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Dropdown Toggle */}
          <div className="py-2">
            <button
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full"
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            >
              Services
            </button>
            {showMobileDropdown && (
              <div className="mt-2 space-y-2">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="flex items-start gap-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="relative w-12 h-12 shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-2">
            <Link
              href="/consultation"
              className="block w-full text-center py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
