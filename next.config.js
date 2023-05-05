/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/global-provider',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
