/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/media-compressor' : '';
const nextConfig = {
  output: 'export',
  basePath,
  // Match basePath exactly so client-side chunk resolution uses the same prefix (no trailing slash).
  assetPrefix: process.env.NODE_ENV === 'production' ? '/media-compressor' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
