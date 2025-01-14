import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../../../apps/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../libs/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
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
          implementation: require('postcss'),
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
  staticDirs: [{ from: '../../../libs/shared/ui/src/fonts', to: '/fonts' }],
}

export default config
