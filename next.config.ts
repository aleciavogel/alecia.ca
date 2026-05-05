import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    tsconfigPath: './tsconfig.build.json',
  },
  productionBrowserSourceMaps: true,
}

export default nextConfig
