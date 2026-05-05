import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import jest from 'eslint-plugin-jest'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'

// Setup dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  // Base configurations
  js.configs.recommended,

  // Global ignores
  {
    ignores: ['.next/**/*', 'node_modules/**/*', 'dist/**/*', 'src/db/zod/**'],
  },

  // Global language options and settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: './',
      },
    },
  },

  // JavaScript files configuration
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',

      // Next.js rules (core-web-vitals)
      ...nextPlugin.configs['core-web-vitals'].rules,

      // Simple import sort
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
            // `@alecia` packages.
            ['^@alecia(/.*|$)'],
            // Relative imports.
            ['^\\.'],
            // SCSS imports.
            ['^[^.]'],
          ],
        },
      ],
    },
  },

  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      '@typescript-eslint': tseslint,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',

      // Next.js rules (core-web-vitals)
      ...nextPlugin.configs['core-web-vitals'].rules,

      // TypeScript-specific rules
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'react/no-unknown-property': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',

      // Simple import sort
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
            // `@alecia` packages.
            ['^@alecia(/.*|$)'],
            // Relative imports.
            ['^\\.'],
            // SCSS imports.
            ['^[^.]'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'react/prop-types': 'off', // Disable prop-types validation since we use TypeScript
    },
  },

  {
    files: [
      '**/*.test.js',
      '**/*.test.jsx',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.js',
      '**/*.spec.jsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/test-helpers/**/*.js',
      '**/test-helpers/**/*.ts',
      '**/test-helpers/**/*.tsx',
      '**/test-helpers/**/*.jsx',
      '**/test/**/*.js',
      '**/test/**/*.jsx',
      '**/test/**/*.ts',
      '**/test/**/*.tsx',
      '**/tests/**/*.js',
      '**/tests/**/*.jsx',
      '**/tests/**/*.ts',
      '**/tests/**/*.tsx',
      '**/__tests__/**/*.js',
      '**/__tests__/**/*.jsx',
      '**/__tests__/**/*.ts',
      '**/__tests__/**/*.tsx',
    ],
    languageOptions: {
      globals: jest.environments.globals.globals,
    },
    plugins: {
      jest: jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },

  // Storybook files
  {
    files: ['**/*.stories.tsx', '**/*.stories.ts', '**/*.stories.jsx', '**/*.stories.js'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
]
