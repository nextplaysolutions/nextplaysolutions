import Link from "next/link";

/**
 * "Aperture" — the locked mark.
 * A play arrow cut out of a solid square: the arrow is negative space.
 * Drawn entirely in CSS (see .np-mark in globals.css) — no image files,
 * no SVG assets. Markup per brand guidelines §08.
 */
export default function Logo({
  invert = false,
  showSolutions = false,
  href = "/",
}: {
  invert?: boolean;
  showSolutions?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`np-logo${invert ? " np-logo--invert" : ""}`}
      aria-label="NextPlay Solutions — home"
    >
      <span className="np-mark" aria-hidden="true" />
      {showSolutions ? (
        <span className="flex flex-col gap-[3px]">
          <span className="np-word">
            Next<strong>Play</strong>
          </span>
          <span
            className="np-label"
            style={{ letterSpacing: "0.3em", fontSize: "0.5625rem" }}
          >
            Solutions
          </span>
        </span>
      ) : (
        <span className="np-word">
          Next<strong>Play</strong>
        </span>
      )}
    </Link>
  );
}
