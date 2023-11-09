/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']      // needed to render mongoose actions
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
        port: '',
        pathname: '/ZFoOuUSqPBEAAAAi/stalzone-meme.gif',
      },
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
        port: '',
        pathname: '/media/10QZvWwBUQbpqE/giphy.gif',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/ios/200/image--v1.png',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
}