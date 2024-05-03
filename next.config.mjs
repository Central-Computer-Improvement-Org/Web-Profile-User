/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   images: {
      unoptimized: true,
   },
   // TODO : komen output, assetPrefix & basePath jika running lokal, aktifkan kembali ketika push
   output: "export",
   assetPrefix: 'https://central-computer-improvement-org.github.io/Web-Profile-User',
   basePath: '/Web-Profile-User',
   experimental: {
      missingSuspenseWithCSRBailout: true,
   },
};

export default nextConfig;
