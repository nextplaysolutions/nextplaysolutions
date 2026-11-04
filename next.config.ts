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
      // only the destination does. 302 (temporary) on purpose so browsers never
      // cache it and the destination can be repointed later.
      {
        source: "/scout",
        destination: "https://api.leadconnectorhq.com/widget/bookings/talk-with-scout",
        statusCode: 302,
      },
    ];
  },
};

export default nextConfig;
