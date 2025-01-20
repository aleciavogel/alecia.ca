/**
 * Build a route with the given values.
 * Replaces placeholders in the format `{key}` with corresponding values.
 *
 * @param route - The route template containing placeholders in `{key}` format.
 * @param values - A map of key-value pairs to replace in the route.
 * @returns The route string with placeholders replaced by the corresponding values.
 *
 * @throws {Error} If a placeholder in the route is not provided in `values`.
 */
export const buildRoute = (route: string, values: Record<string, string>): string => {
  return route.replace(/{(\w+)}/g, (match, key) => {
    if (!(key in values)) {
      throw new Error(`Missing value for placeholder: ${key}`)
    }
    return values[key]
  })
}
