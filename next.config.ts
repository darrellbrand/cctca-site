import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true, //
   images: {
    unoptimized: true, // <-- Add this line
  },
};

export default nextConfig;
