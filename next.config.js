/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
        port: '',
        pathname: '/ZFoOuUSqPBEAAAAi/stalzone-meme.gif',
      },
    ],
  },
}