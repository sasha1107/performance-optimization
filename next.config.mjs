/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "sasha1107.github.io",
      },
    ],
    domains: ["github.com"],
  },
};

export default nextConfig;
