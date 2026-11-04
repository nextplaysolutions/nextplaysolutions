"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/assessment", label: "Assessment" },
  { href: "/services", label: "Services" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dark = pathname === "/";

  return (
    <header className={`sticky top-0 z-50 border-b ${dark ? "bg-np-navy border-white/15" : "bg-np-white border-np-rule"}`}>
      <div className="max-w-[1200px] mx-auto px-5 h-[72px] flex items-center justify-between">
        <Logo invert={dark} />

        <nav className="hidden lg:flex items-center gap-8 text-[0.9375rem]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${dark ? "hover:text-np-rust" : "hover:text-np-navy"} ${
                pathname === href
                  ? dark ? "text-white font-medium" : "text-np-navy font-medium"
                  : dark ? "text-np-on-navy-2 font-normal" : "text-np-body font-normal"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/demo"
            className="bg-np-rust text-np-navy px-6 py-3 text-[0.9375rem] font-medium hover:bg-np-rust-light transition-colors"
          >
            see if you qualify
          </Link>
        </nav>

        <button
          className={`lg:hidden p-2 -mr-2 ${dark ? "text-white" : "text-np-navy"}`}
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
        <div className={`lg:hidden border-t px-5 py-6 flex flex-col gap-5 ${dark ? "border-white/15 bg-np-navy" : "border-np-rule bg-np-white"}`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg ${
                pathname === href
                  ? dark ? "text-white font-medium" : "text-np-navy font-medium"
                  : dark ? "text-np-on-navy-2 font-normal" : "text-np-body font-normal"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/demo"
            className="bg-np-rust text-np-navy px-6 py-4 text-center text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            see if you qualify
          </Link>
        </div>
      )}
    </header>
  );
}
