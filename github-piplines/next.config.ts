import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/GitPage-Actions-Guide", // Could cause a problem so check
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
