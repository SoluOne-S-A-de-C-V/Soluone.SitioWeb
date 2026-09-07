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
    return industries.map((slug) => ({
      source: `/${slug}`,
      destination: `/industries/${slug}`,
    }));
  },
};

export default nextConfig;
