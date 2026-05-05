/**
 * Get a placeholder image from placehold.co
 * @param width - The width of the image
 * @param height - The height of the image
 */
export const getPlaceholderImage = (width: number, height: number): string =>
  `https://placehold.co/${String(width)}x${String(height)}`
