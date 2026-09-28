import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Superseded routes. Links to these are already out in DMs and texts —
      // 308s so they keep working and search engines transfer the old URLs.
      { source: "/how-it-works", destination: "/assessment", permanent: true },
      { source: "/why-us", destination: "/about", permanent: true },
      { source: "/founding-cohort", destination: "/", permanent: true },
      { source: "/pricing", destination: "/assessment", permanent: true },
      // "audit" is never our word — catch anyone who typed or linked it.
      { source: "/audit", destination: "/assessment", permanent: true },
      { source: "/contact", destination: "/book", permanent: true },
      // Business-card QR short link. Printed on cards, so the path never changes;
      // only the destination does. Temporary (307) on purpose so browsers never
      // cache it. Stopgap: /demo (see if you qualify). Repoint to the GHL
      // "Talk with Scout" calendar (ID-based URL) once it is live.
      { source: "/scout", destination: "/demo", permanent: false },
    ];
  },
};

export default nextConfig;
