import type { MetadataRoute } from "next";
import { practice } from "@/data/practice";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/office-info",
    "/services",
    "/about",
    "/testimonials",
    "/contact",
    "/patient-forms",
    "/make-a-payment",
  ].map((path) => ({
    url: practice.url + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
