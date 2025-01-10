import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'

import { DEFAULT_THEME, EXCLUDED_COLORS } from './constants'
import { generateColorVars, resolveThemeColorsExtension } from './generate-theme-vars'
import type { Palette, ThemeTemplate, TwColorDefinition } from './types'

/** Plugin Options for the exposeColors plugin */
export interface DynamicThemePluginOptions<T extends ThemeTemplate = ThemeTemplate> {
  theme?: T
  defaultColors: Record<keyof T, TwColorDefinition>
}

/**
 * Tailwind CSS plugin that adds dynamic variables for each color in the theme to :root.
 * The use has to add a class to a parent DOM element to change the theme.
 * @param options - The plugin configuration options.
 * @returns A function that can be used as a Tailwind CSS plugin.
 */
export const dynamicTheme = plugin.withOptions(
  (options: DynamicThemePluginOptions) => {
    const { theme = DEFAULT_THEME, defaultColors = {} } = options

    return (api: PluginAPI) => {
      const insufficientColors = Object.keys(defaultColors).length !== Object.keys(theme).length

      if (insufficientColors) {
        console.error('The defaultColors object must contain a color for each theme key.')
        return
      }

      /**
       * Generate the default CSS variables for the theme colors at the root using
       * the specified default colors from the settings.
       */
      const defaultVars = Object.keys(theme).reduce((acc, key) => {
        const palette = theme[key] ?? ({} as Palette)
        const currentColor = defaultColors[key]

        const colorVars = generateColorVars({
          paletteKey: key,
          paletteSettings: palette,
          currentColor,
          generateDarkMode: false,
        })

        return {
          ...acc,
          ...colorVars,
        }
      }, {})

      api.addBase({ ':root': defaultVars })

      /**
       * Generate classes and CSS variables for each color in the theme.
       */
      const themeKeys = Object.keys(theme)
      const twColorKeys = Object.keys(api.theme('colors')).filter(
        (colorKey) => !themeKeys.includes(colorKey) && !EXCLUDED_COLORS.includes(colorKey),
      )

      themeKeys.forEach((key) => {
        const palette = theme[key] ?? ({} as Palette)

        twColorKeys.forEach((color) => {
          const colorSelector = `.${key}-${color}`
          const currentColor = api.theme('colors')?.[color] as TwColorDefinition

          api.addBase({
            [colorSelector]: generateColorVars({
              paletteKey: key,
              paletteSettings: palette,
              currentColor,
            }),
            [`.dark ${colorSelector}`]: generateColorVars({
              paletteKey: key,
              paletteSettings: palette,
              currentColor,
              generateDarkMode: true,
            }),
          })
        })
      })
    }
  },
  (options: DynamicThemePluginOptions) => {
    const { theme = DEFAULT_THEME } = options
    return {
      theme: {
        extend: {
          colors: resolveThemeColorsExtension(theme),
        },
      },
    }
  },
)
