import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://buhrsgwakroxeytechzs.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buhrsgwakroxeytechzs.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
