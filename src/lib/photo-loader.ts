"use client";
import type { ImageLoaderProps } from "next/image";

// Widths match scripts/prepare-photos.mjs. No runtime transformation needed.
export default function photoLoader({ src, width }: ImageLoaderProps) {
  const widths = [400, 800, 1200, 1600, 2048];
  const size = widths.find((size) => size >= width) ?? 2048;
  return `${src}-${size}.webp`;
}
