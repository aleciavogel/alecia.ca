import { jest } from '@jest/globals'
import _ from 'lodash'
import postcss, { Plugin } from 'postcss'
import tailwindcss, { Config } from 'tailwindcss'
import type { PluginsConfig } from 'tailwindcss/types/config'

export const generatePluginCssMock = async (
  plugins: Partial<PluginsConfig>,
  config = {} as Config,
): Promise<string> => {
  const spy = jest.spyOn(global.console, 'log').mockImplementation(() => {
    /** noop */
  })

  const { css } = await postcss([
    tailwindcss(
      _.merge(
        {
          theme: {
            screens: {
              sm: '640px',
            },
          },
          corePlugins: false,
          plugins,
          future: {
            removeDeprecatedGapUtilities: true,
          },
        },
        config,
      ),
    ) as Plugin,
  ]).process('@tailwind base; @tailwind components; @tailwind utilities', {
    from: undefined,
  })

  spy.mockRestore()

  return css
}
