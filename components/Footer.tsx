import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-5xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-brand-gray">
        <div>
          <span className="font-semibold text-brand-dark">
            NextPlay<span className="text-brand-teal">.</span>
          </span>
          <span className="ml-2">Your unfair AI advantage.</span>
        </div>
        <nav className="flex flex-wrap gap-5 justify-center">
          <Link href="/how-it-works" className="hover:text-brand-teal transition-colors">
            How It Works
          </Link>
          <Link href="/why-us" className="hover:text-brand-teal transition-colors">
            Why Us
          </Link>
          <Link href="/founding-cohort" className="hover:text-brand-teal transition-colors">
            Founding Cohort
          </Link>
          <Link href="/pricing" className="hover:text-brand-teal transition-colors">
            Pricing
          </Link>
          <Link href="/book" className="hover:text-brand-teal transition-colors">
            Book a Call
          </Link>
        </nav>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} NextPlay Solutions, LLC
        </p>
      </div>
    </footer>
  );
}
