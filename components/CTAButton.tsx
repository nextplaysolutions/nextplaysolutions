import Link from "next/link";

interface CTAButtonProps {
  label?: string;
  href?: string;
  size?: "default" | "large";
}

export default function CTAButton({
  label = "Book Your Free Audit Call",
  href = "/book",
  size = "default",
}: CTAButtonProps) {
  const base =
    "inline-block bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal-dark transition-colors text-center";
  const sizing =
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <Link href={href} className={`${base} ${sizing}`}>
      {label}
    </Link>
  );
}
