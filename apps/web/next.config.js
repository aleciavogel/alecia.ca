//@ts-check

const { composePlugins, withNx } = require('@nx/next')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: process.env['NODE_ENV'] === 'development',
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
]

module.exports = composePlugins(...plugins)(nextConfig)
