/** Long Hex Color Code RegEx */
export const HEX_REGEX = /^#(?<r>[a-f\d]{2})(?<g>[a-f\d]{2})(?<b>[a-f\d]{2})(?<a>[a-f\d]{2})?$/i

/** Short Hex Color Code RegEx */
export const SHORT_HEX_REGEX =
  /^#(?<temp1>[a-f\d])(?<temp2>[a-f\d])(?<temp3>[a-f\d])(?<temp4>[a-f\d])?$/i

/** Color Value RegEx */
export const VALUE_REGEX = /(?:\d+|\d*\.\d+)%?/

/** Separator RegEx */
export const SEP_REGEX = /\s*,\s*|\s+/

/** Alpha/Opacity Separator RegEx */
export const ALPHA_SEP_REGEX = /\s*[,/]\s*/

/** Custom CSS Property/Variable RegEx */
export const CSS_PROPERTY_REGEX = /var\(--[^ )]*?(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/

/** RegExp that matches an RGB or RGBA color string */
export const RGB_REGEXP = new RegExp(
  `^(rgba?)\\(\\s*(${VALUE_REGEX.source}|${CSS_PROPERTY_REGEX.source})(?:${SEP_REGEX.source}(${VALUE_REGEX.source}|${CSS_PROPERTY_REGEX.source}))?(?:${SEP_REGEX.source}(${VALUE_REGEX.source}|${CSS_PROPERTY_REGEX.source}))?(?:${ALPHA_SEP_REGEX.source}(${VALUE_REGEX.source}|${CSS_PROPERTY_REGEX.source}))?\\s*\\)$`,
)

/** RegExp that matches an HSL or HSLA color string */
export const HSL_REGEXP = new RegExp(
  `^(hsla?)\\(\\s*((?:${VALUE_REGEX.source})(?:deg|rad|grad|turn)?|${CSS_PROPERTY_REGEX.source})(?:${SEP_REGEX.source}(${VALUE_REGEX.source}|${CSS_PROPERTY_REGEX.source}))?(?:${SEP_REGEX.source}(${VALUE_REGEX.source}|${CSS_PROPERTY_REGEX.source}))?(?:${ALPHA_SEP_REGEX.source}(${VALUE_REGEX.source}|${CSS_PROPERTY_REGEX.source}))?\\s*\\)$`,
)

/**
 * Parses a CSS color string into its components.
 * @param colorToParse - The color string to parse (e.g., hex, rgb, hsl).
 * @param loose - Whether to allow loose parsing.
 * @returns The parsed color components including mode, color values, and alpha, or null if parsing fails.
 */
export const parseColor = (
  colorToParse: string,
  { loose = false } = {},
): { mode: string; color: string[]; alpha: string | undefined } | null => {
  const value = colorToParse.trim()

  // Handle hex and short hex formats by expanding short hex to full hex
  const hexMatch = HEX_REGEX.exec(
    value.replace(SHORT_HEX_REGEX, (_, r, g, b, a) =>
      ['@/', r, r, g, g, b, b, a ? String(a) + String(a) : ''].join(''),
    ),
  )

  if (hexMatch) {
    // Parse hex values into RGB components
    const [r, g, b] = [hexMatch[1], hexMatch[2], hexMatch[3]].map((hex) =>
      parseInt(String(hex), 16).toString(),
    )
    const alpha = hexMatch[4] ? (parseInt(hexMatch[4], 16) / 255).toString() : undefined

    return {
      mode: 'rgb',
      color: [r, g, b].map(String),
      alpha,
    }
  }

  // Attempt to match against RGB or HSL formats
  const match = RGB_REGEXP.exec(value) ?? HSL_REGEXP.exec(value)
  if (!match) return null

  // Extract color values, filtering out undefined or null values
  const color = [match[2], match[3], match[4]].filter(Boolean).map(String)
  const alpha = match[5]?.toString()

  // Special handling for CSS variables in color definitions
  if (color.length === 2 && color[0]?.includes('var(')) {
    return { mode: match[1] ?? '', color: [color[0]], alpha: color[1] }
  }

  // Check for strict mode (requires exactly 3 color values unless loose mode is enabled)
  if (!loose && color.length !== 3) return null

  // In strict mode, ensure at least one part is a CSS variable if fewer than 3 values
  if (color.length < 3 && !color.some((part) => /^var\(.*?\)$/.test(part))) return null

  return {
    mode: match[1] ?? '',
    color,
    alpha,
  }
}
