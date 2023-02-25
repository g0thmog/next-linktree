/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'static.vecteezy.com',
      'upload.wikimedia.org',
      '1000logos.net',
      'yt3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
