"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/why-us", label: "Why Us" },
  { href: "/founding-cohort", label: "Founding Cohort" },
  { href: "/pricing", label: "Pricing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-brand-dark tracking-tight text-lg"
          onClick={() => setOpen(false)}
        >
          NextPlay<span className="text-brand-teal">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-brand-teal ${
                pathname === href ? "text-brand-teal" : "text-brand-gray"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="ml-2 bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-teal-dark transition-colors"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brand-gray"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-medium transition-colors hover:text-brand-teal ${
                pathname === href ? "text-brand-teal" : "text-brand-dark"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-2 bg-brand-teal text-white px-4 py-3 rounded-lg text-base font-semibold text-center hover:bg-brand-teal-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
