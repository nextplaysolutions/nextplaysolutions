import Link from "next/link";
import Logo from "./Logo";
import { COMPANY, DURATION } from "@/lib/offer";

export default function Footer() {
  return (
    <footer className="mt-auto bg-np-navy text-np-on-navy">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <Logo invert showSolutions />
            <p
              className="np-eyebrow mt-6"
              style={{ color: "var(--np-rust-light)" }}
            >
              {COMPANY.tagline}
            </p>
          </div>

          <nav className="flex flex-col text-[0.9375rem] md:text-right">
            {[
              { href: "/assessment", label: "The Assessment" },
              { href: "/about", label: "About" },
              { href: "/book", label: "Book a call" },
              { href: "/legal", label: "Legal" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-np-on-navy-2 hover:text-white transition-colors py-2.5"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-2">
            {/* Points at /demo — the number is revealed only after capture. */}
            <Link
              href="/demo"
              className="np-label hover:text-white transition-colors"
              style={{ color: "var(--np-on-navy-muted)" }}
            >
              Talk to Scout · {DURATION.demoMinutes} min
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="np-label hover:text-white transition-colors"
              style={{ color: "var(--np-on-navy-muted)" }}
            >
              {COMPANY.email}
            </a>
          </div>
          <p
            className="np-label"
            style={{ color: "var(--np-on-navy-muted)" }}
          >
            © {new Date().getFullYear()} {COMPANY.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
