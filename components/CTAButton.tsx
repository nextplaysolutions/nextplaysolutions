import Link from "next/link";

/**
 * Square corners and Signal Lime: the primary action is the strongest signal.
 */
export default function CTAButton({
  label = "see if you qualify",
  href = "/demo",
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
    rust: "bg-np-rust text-np-navy hover:bg-np-rust-light",
    outline:
      "border border-np-navy text-np-navy hover:bg-np-navy hover:text-white",
    "on-navy": "bg-np-rust text-np-navy hover:bg-np-rust-light",
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
