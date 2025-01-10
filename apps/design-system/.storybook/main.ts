import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../../../apps/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../libs/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
    'storybook-addon-tag-badges',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    crossOriginIsolated: false,
    disableWhatsNewNotifications: true,
  },
}

export default config
