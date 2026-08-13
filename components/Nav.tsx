"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

/** Per brand guidelines §07: Assessment · About · Book (rust button). */
const links = [
  { href: "/assessment", label: "Assessment" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-np-white border-b border-np-rule">
      <div className="max-w-[1200px] mx-auto px-5 h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-[0.9375rem]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-np-navy ${
                pathname === href
                  ? "text-np-navy font-medium"
                  : "text-np-body font-normal"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-np-rust text-white px-6 py-3 text-[0.9375rem] font-medium hover:bg-np-navy transition-colors"
          >
            Book
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-np-navy"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-np-rule bg-np-white px-5 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg ${
                pathname === href
                  ? "text-np-navy font-medium"
                  : "text-np-body font-normal"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-np-rust text-white px-6 py-4 text-center text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Book
          </Link>
        </div>
      )}
    </header>
  );
}
