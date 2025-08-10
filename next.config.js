/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use default server output so API routes can run (DB + server runtime)
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
};

module.exports = nextConfig;
