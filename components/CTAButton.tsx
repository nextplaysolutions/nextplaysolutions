import Link from "next/link";

/**
 * Square corners, rust ground. Default label never leads with "free" —
 * availability is framed as selection, not discount (brand guidelines §06).
 */
export default function CTAButton({
  label = "Book an assessment call",
  href = "/book",
  size = "default",
  variant = "rust",
}: {
  label?: string;
  href?: string;
  size?: "default" | "large";
  variant?: "rust" | "outline" | "on-navy";
}) {
  const sizing =
    size === "large" ? "px-8 py-4 text-[1.0625rem]" : "px-6 py-3 text-[0.9375rem]";

  const variants = {
    rust: "bg-np-rust text-white hover:bg-np-navy",
    outline:
      "border border-np-navy text-np-navy hover:bg-np-navy hover:text-white",
    "on-navy": "bg-white text-np-navy hover:bg-np-rust hover:text-white",
  } as const;

  return (
    <Link
      href={href}
      className={`inline-block font-medium text-center transition-colors ${sizing} ${variants[variant]}`}
    >
      {label}
    </Link>
  );
}
