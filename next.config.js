/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "images.ctfassets.net" },
    ],
  },
};

module.exports = nextConfig;
