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
    ];
  },
};

export default nextConfig;
