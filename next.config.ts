import type { NextConfig } from "next";
// Export by default, including plain `next build` in hosted build systems.
// The server build is an explicit opt-in for local Next.js production previews.
const staticExport = process.env.NEXT_SERVER_BUILD !== "1";
const config: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  poweredByHeader: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/photo-loader.ts",
    deviceSizes: [400, 800, 1200, 1600, 2048],
    imageSizes: [],
  },
  // Confirm legacy paths against the existing site's sitemap before launch.
  // Static hosts read public/_redirects instead of Next's runtime redirects.
  redirects: staticExport
    ? undefined
    : async () => {
        return [
          { source: "/office", destination: "/office-info", permanent: true },
          {
            source: "/our-location",
            destination: "/office-info",
            permanent: true,
          },
          { source: "/dental-staff", destination: "/about", permanent: true },
          { source: "/about-us", destination: "/about", permanent: true },
          { source: "/contact-us", destination: "/contact", permanent: true },
          {
            source: "/dental-services",
            destination: "/services",
            permanent: true,
          },
        ];
      },
};
export default config;
