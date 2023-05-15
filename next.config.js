/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pps.whatsapp.net',
        port: '',
        pathname: '/v/t61.24694-24/**',
      },
    ],
  },
};

module.exports = nextConfig;
