/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the sandbox live-preview origins to load dev assets and HMR.
  allowedDevOrigins: ['*.e2b.app', '*.e2b.dev'],
};

export default nextConfig;
