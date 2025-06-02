"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div className="flex flex-col items-start space-y-3">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={120} height={32} />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Helping startups and brands grow with premium digital experiences.
            </p>
            <div className="flex items-center gap-4 pt-2 text-muted-foreground">
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
                href="https://www.linkedin.com/company/tyco-developers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
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

          {/* Social Media & Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-3">Contact Us</h3>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@tycodev.com"
                  className="hover:text-foreground transition"
                >
                  info@tycodev.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+923175473337"
                  className="hover:text-foreground transition"
                >
                  +92 325 9475724
                </a>
              </div>
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
