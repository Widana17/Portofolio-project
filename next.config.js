/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = {
    experimental: {
      serverActions: true,
      serverActionsBodySizeLimit: '2mb',
    },
  }