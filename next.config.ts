import type { NextConfig } from "next";

const industries = [
  "autoparts",
  "pastry-shops-and-ice-cream-parlors",
  "hardware",
  "wines-and-spirits",
  "fashion-and-footwear",
  "groceries",
  "electronics",
  "restaurants",
];

const nextConfig: NextConfig = {
  async rewrites() {
    const list = industries.map((slug) => ({
      source: `/${slug}`,
      destination: `/industries/${slug}`,
    }));
    list.push(
      { source: "/carnicerias", destination: "/industries/groceries" },
      { source: "/carniceria", destination: "/industries/groceries" },
      { source: "/butcher-shops", destination: "/industries/groceries" }
    );
    return list;
  },
  async redirects() {
    return [
      {
        source: "/v2/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/ecosistema",
        destination: "/ecosystem",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
