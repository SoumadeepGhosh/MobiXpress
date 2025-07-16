import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ disables domain restrictions
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ prevents ESLint from blocking your build
  },
};

export default nextConfig;
