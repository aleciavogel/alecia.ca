/**
 * Filter out duplicate values from an array, keeping the first occurrence of each value.
 * @param arr - The array to filter
 */
export const uniq = <T>(arr: T[]): T[] => Array.from(new Set(arr))
