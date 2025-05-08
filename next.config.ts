export default {
  reactStrictMode: false,
  experimental: {
    webpackMemoryOptimizations: true,
  },
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
