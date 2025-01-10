import { expect } from '@jest/globals'
import type { MatcherFunction } from 'expect'

const isString = (value: unknown): value is string => typeof value === 'string'

export const toMatchCss: MatcherFunction<[argument: unknown]> = (actual, argument) => {
  if (!isString(actual) || !isString(argument)) {
    throw new TypeError('toMatchCss must be called with two strings')
  }

  const stripped = (str: string): string => str.replace(/[;\s]/g, '')

  if (stripped(actual) === stripped(argument)) {
    return {
      message: () => `expected ${actual} not to match CSS ${argument}`,
      pass: true,
    }
  }

  return {
    message: () => `expected ${actual} to match CSS ${argument}`,
    pass: false,
  }
}

expect.extend({
  toMatchCss,
})

declare module 'expect' {
  interface AsymmetricMatchers {
    toMatchCss: (argument: string) => void
  }
  interface Matchers<R> {
    toMatchCss: (argument: string) => R
  }
}
