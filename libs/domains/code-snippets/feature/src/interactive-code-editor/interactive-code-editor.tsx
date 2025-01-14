'use client'

import { type FC, useCallback } from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import { amethyst } from '@codesandbox/sandpack-themes'
import { stegaClean } from '@sanity/client/stega'
import { useTheme } from 'next-themes'

import { FilenameBar } from '@alecia/code-snippets-ui'
import type { Sandpack as SanitySandpack, SandpackFile } from '@alecia/sanity-types'

interface SandpackProps extends Omit<SanitySandpack, 'files' | 'devDependencies' | 'dependencies'> {
  files?: SandpackFile[]
  dependencies?: {
    name?: string
    version?: string
  }[]
  devDependencies?: {
    name?: string
    version?: string
  }[]
}

export const InteractiveCodeEditor: FC<SandpackProps> = ({
  title,
  template = 'react-ts',
  files,
  options,
  dependencies,
  devDependencies,
  showPreview = true,
}) => {
  const { resolvedTheme } = useTheme()

  const sandpackFiles =
    files?.reduce((acc, file) => {
      if (!file.code?.filename) {
        return acc
      }

      return {
        ...acc,
        // [stegaClean(file.code.filename)]: stegaClean(file.code.code),
        [stegaClean(file.code.filename)]: {
          code: stegaClean(file.code.code),
          hidden: file.hidden ?? false,
          readOnly: file.readOnly ?? false,
          active: file.active ?? true,
        },
      }
    }, {}) ?? {}

  const processDependencies = useCallback(
    (deps?: { name?: string; version?: string }[]): Record<string, string> => {
      return (
        deps?.reduce((acc, dep) => {
          if (!dep.name) {
            return acc
          }

          return {
            ...acc,
            [dep.name]: dep.version ?? 'latest',
          }
        }, {}) ?? {}
      )
    },
    [],
  )

  return (
    <div>
      <FilenameBar title={stegaClean(title) ?? ''} />
      <Sandpack
        template={stegaClean(template)}
        files={sandpackFiles}
        customSetup={{
          dependencies: processDependencies(dependencies),
          devDependencies: processDependencies(devDependencies),
        }}
        theme={resolvedTheme === 'dark' ? amethyst : undefined}
      />
    </div>
  )
}
