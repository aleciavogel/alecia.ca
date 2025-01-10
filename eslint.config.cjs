const nx = require('@nx/eslint-plugin')
const simpleImport = require('eslint-plugin-simple-import-sort')
const jsoncParser = require('jsonc-eslint-parser')

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
    plugins: {
      'simple-import-sort': simpleImport,
    },
  },

  {
    files: ['**/*.stories.tsx', '**/*.stories.ts', '**/*.stories.jsx', '**/*.stories.js'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          /**
           * Import Sorting Group Order:
           * - React & Next imports
           * - Third-party libraries
           * - Local imports
           * - CSS imports
           */
          groups: [
            // `react` related packages come first.
            // Things that start with a letter (or digit or underscore), or `@`
            // followed by a letter, but not `@alecia`.
            ['^react', '^@?(?!alecia)\\w'],
            // `@code-sanctum` packages.
            ['^@alecia(/.*|$)'],
            // Relative imports.
            ['^\\.'],
            // SCSS imports.
            ['^[^.]'],
          ],
        },
      ],
      '@next/next/no-img-element': 'off',
    },
  },
]
