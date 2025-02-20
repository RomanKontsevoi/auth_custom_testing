import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aamotorswebapp800a.blob.core.windows.net',
        port: '',
        pathname: '/str-b2c/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
