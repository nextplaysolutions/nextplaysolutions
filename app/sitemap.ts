import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/offer";
import { GUIDES } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-31");

  return [
    { url: `${SITE_URL}/remodelers`, lastModified: new Date("2026-11-04"), changeFrequency: "monthly", priority: 0.8 },
    ...GUIDES.map(g => ({ url: `${SITE_URL}/field-notes/${g.slug}`, lastModified: new Date("2026-09-08") })),
    { url: SITE_URL, lastModified: new Date("2026-11-04"), changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/assessment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/assessment/sample`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date("2026-11-04"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/field-notes`,
      lastModified: new Date("2026-11-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/demo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
