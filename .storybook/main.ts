import type { StorybookConfig } from '@storybook/nextjs'
import postcss from 'postcss'

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
    'storybook-addon-tag-badges',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-themes',
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    crossOriginIsolated: false,
    disableWhatsNewNotifications: true,
  },
  /**
   * Tell Storybook where fonts are located
   */
  staticDirs: [{ from: '../src/fonts', to: '/fonts' }],
}

export default config
