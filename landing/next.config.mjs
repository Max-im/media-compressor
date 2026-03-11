/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/media-compressor' : '';
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/media-compressor/' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
