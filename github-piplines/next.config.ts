import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/github-piplines", // Could cause a problem so check
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
