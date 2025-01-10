/** Color shade types for the dynamic theme plugin. */
export type TwColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

/** Tailwind color object type */
export type TwColorDefinition = Record<string, string>

/**
 * Color template for a variable in the theme. Users can define a function that returns
 * a string to generate the variable dynamically. Otherwise, appropriate raw color value
 * will be used in lieu.
 */
export interface ColorTemplate {
  /** Default shade */
  shade: TwColorShade
  /** Shade to use when the theme is in dark mode */
  darkMode?: TwColorShade
  /** Function to generate a dynamic color value. Otherwise, use the raw value by default */
  template?: (color: string) => string
}

/** Object that defines the color palette for the theme. */
export type Palette = Record<string, ColorTemplate | TwColorShade>

/** Theme Template */
export type ThemeTemplate = Record<string, Palette>
