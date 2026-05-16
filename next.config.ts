import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Mengabaikan error TypeScript saat proses build di Vercel
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
