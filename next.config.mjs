/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disable image optimization
  },
  assetPrefix: '/portfolio-website/',
  basePath: '/portfolio-website',
};

export default nextConfig;
