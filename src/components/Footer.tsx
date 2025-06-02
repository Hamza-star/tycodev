"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 text-foreground">
      <div className="max-w-7xl mx-auto px-6  py-16 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={20} />
            </Link>
            <p className="text-muted-foreground pt-2 text-sm max-w-xs">
              Helping startups and brands grow with premium digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-foreground transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-medium mb-3">Follow Us</h3>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a
                href="https://www.facebook.com/profile.php?id=61576466348880"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/tycodevelopers?igsh=MWo4enJkMGM1ZWRrbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/posts/tyco-developers_professional-mobile-app-development-services-activity-7334613582912921603-fKiU?utm_source=share&utm_medium=member_android&rcm=ACoAAEOyd7ABS8RiIdqNjqXp20SBYWD8S0ZmlP4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Tycodev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
