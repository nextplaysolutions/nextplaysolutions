"use client";

import { useEffect } from "react";

/**
 * Records which tracked link brought a visitor in.
 *
 * Renders nothing — no markup, so none of the brand rules apply here. On a
 * visit carrying ?src= it posts the raw value to /api/attribution, which
 * validates it and sets the cookie server-side (see that route for why the
 * write does not happen in the browser).
 *
 * Visits without ?src= — nearly all of them — do no work at all: no fetch, no
 * cookie read, nothing. The cookie itself is httpOnly and therefore invisible
 * here; first-touch is enforced by the route, which is the stronger place for
 * it anyway.
 *
 * Deliberately not a root proxy.ts: the marketing pages are statically
 * prerendered and CDN-served, and putting a server function in front of every
 * request site-wide to carry a marketing label would be a poor trade.
 */
export default function SourceCapture() {
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("src");
    if (!raw) return;

    // Attribution must never surface an error to a prospect.
    fetch("/api/attribution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ src: raw }),
      keepalive: true,
    }).catch(() => {});
  }, []);

  return null;
}
