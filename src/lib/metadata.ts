import type { Metadata } from "next";
import { practice } from "@/data/practice";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${practice.name}`,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: practice.name,
    },
  };
}
