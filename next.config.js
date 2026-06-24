/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "images.ctfassets.net" },
    ],
    qualities: [100, 75],
  },
};

module.exports = nextConfig;
