import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/github-piplines", // Could cause a problem so check
  output: "export",  // <=== enables static exports
    images: {
    unoptimized: true, // required for GitHub Pages 
  },
};

export default nextConfig;
