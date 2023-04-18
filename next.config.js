/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [""],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
