/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "carallel.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "pics.filmaffinity.com",
      },
    ],
  },
};

module.exports = nextConfig;
