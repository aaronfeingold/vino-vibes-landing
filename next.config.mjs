/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize for Vercel deployment
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
