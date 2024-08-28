/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   images: {
      unoptimized: true,
   },
   output: "standalone",
assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
