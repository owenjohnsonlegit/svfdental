import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  // Confirm legacy paths against the existing site's sitemap before launch.
  async redirects() {
    return [
      { source: "/office", destination: "/office-info", permanent: true },
      { source: "/our-location", destination: "/office-info", permanent: true },
      { source: "/dental-staff", destination: "/about", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/dental-services", destination: "/services", permanent: true },
    ];
  },
};
export default config;
