import type { MetadataRoute } from "next";
import { practice } from "@/data/practice";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${practice.url}/sitemap.xml`,
  };
}
