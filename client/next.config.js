/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'projectmanagement-s3.s3.us-east-1.amazonaws.com/public/',
        port:"",
        pathname: '/**',
      }
    ]
  }
};

module.exports = nextConfig;