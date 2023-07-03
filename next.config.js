const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  images: {
    domains: ['localhost'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
