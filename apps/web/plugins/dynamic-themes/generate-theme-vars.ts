import { parseColor } from './parse-colors'
import type {
  ColorTemplate,
  Palette,
  ThemeTemplate,
  TwColorDefinition,
  TwColorShade,
} from './types'

// Type definition for the function parameters
interface GenerateColorVarsParams {
  paletteKey: string
  paletteSettings: Palette
  currentColor: TwColorDefinition
  generateDarkMode?: boolean
}

// Helper functions to identify if a value is a valid shade or color template
const isShade = (value: unknown): value is TwColorShade =>
  typeof value === 'number' && value >= 50 && value <= 950 && value % 50 === 0

const hasColorSettings = (value: unknown): value is ColorTemplate =>
  typeof value === 'object' &&
  value !== null &&
  ('shade' in value || 'darkMode' in value || 'template' in value)

// Converts a color value to RGB format
const toRgb = (value: string): string => {
  const parsed = parseColor(value)
  return parsed ? parsed.color.join(' ') : '255 255 255'
}

/**
 * Generate CSS variables for a color palette item.
 * @param paletteKey - Name of the color palette item (i.e., primary, secondary, etc.)
 * @param paletteSettings - The settings for the color palette item.
 * @param currentColor - The tailwind color object to use for generating the variables
 * @param generateDarkMode - Whether to generate dark mode colors.
 * @returns An object containing CSS variable names and their values.
 */
export const generateColorVars = ({
  paletteKey,
  paletteSettings,
  currentColor,
  generateDarkMode = false,
}: GenerateColorVarsParams): Record<string, string> => {
  return Object.keys(paletteSettings).reduce((acc, key) => {
    const value = paletteSettings[key]
    const isDefaultVariable = key.toLowerCase() === 'default'
    const variableName = isDefaultVariable ? `--${paletteKey}` : `--${paletteKey}-${key}`

    // Handle cases where the value is a shade
    if (isShade(value) && !generateDarkMode) {
      const colorValue = currentColor[value]
      if (!colorValue) return acc

      return {
        ...acc,
        [variableName]: toRgb(colorValue),
      }
    }

    // Generate light mode colors
    if (hasColorSettings(value) && !generateDarkMode) {
      const { shade, template } = value
      const lightModeColor = currentColor[shade]

      if (!lightModeColor) return acc

      return {
        ...acc,
        [variableName]: template ? template(lightModeColor) : toRgb(lightModeColor),
      }
    }

    // Generate dark mode colors
    if (hasColorSettings(value) && generateDarkMode) {
      const { darkMode, template } = value
      if (!darkMode) return acc

      const darkModeColor = currentColor[darkMode]
      if (!darkModeColor) return acc

      return {
        ...acc,
        [variableName]: template ? template(darkModeColor) : toRgb(darkModeColor),
      }
    }

    return acc
  }, {})
}

/**
 * Resolve the theme colors to CSS variables for the Tailwind theme.extend.colors configuration.
 * @param theme - The theme to resolve the colors for.
 * @returns An object mapping palette keys to their respective Tailwind color definitions.
 */
export const resolveThemeColorsExtension = (
  theme: ThemeTemplate,
): Record<string, TwColorDefinition> => {
  return Object.keys(theme).reduce((acc, palette) => {
    const paletteSettings = theme[palette] ?? ({} as Palette)

    const colorDefinitions = Object.keys(paletteSettings).reduce((colorAcc, key) => {
      const isDefault = key.toUpperCase() === 'DEFAULT'
      const shade = isDefault ? 'DEFAULT' : key
      const variableName = isDefault ? `--${palette}` : `--${palette}-${shade}`
      const shadeNumber = parseInt(shade, 10)

      if (!isDefault && !isShade(shadeNumber)) {
        return colorAcc
      }

      const variableValue = `var(${variableName})`

      return {
        ...colorAcc,
        [shade]: {
          DEFAULT: `rgb(${variableValue})`,
        },
      }
    }, {})

    return {
      ...acc,
      [palette]: colorDefinitions,
    }
  }, {})
}
