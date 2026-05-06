'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import { amethyst } from '@codesandbox/sandpack-themes'
import { stegaClean } from '@sanity/client/stega'
import { useTheme } from 'next-themes'

import type {
  Options as SanityOptions,
  Sandpack as SanitySandpack,
  SandpackFile,
} from '@alecia/vendors/sanity/types/sanity.types'

import FilenameBar from './filename-bar'

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

/**
 * Extracts options for the SandpackProvider from Sanity options.
 */
function getProviderOptions(options?: SanityOptions) {
  if (!options) return undefined

  return {
    autorun: options.autoRun ?? true,
    autoReload: options.autoReload,
    initMode: options.initMode,
    externalResources: options.staticResources,
  }
}

/**
 * Extracts options for SandpackCodeEditor from Sanity options.
 */
function getCodeEditorOptions(options?: SanityOptions) {
  return {
    showTabs: options?.showTabs,
    showLineNumbers: options?.showLineNumbers,
    showInlineErrors: options?.showInlineErrors,
    showRunButton: options?.showRunButton ?? false,
    wrapContent: options?.wrapContent,
    closableTabs: options?.closeableTabs,
    initMode: options?.initMode,
    readOnly: options?.readOnly,
    showReadOnly: options?.showReadOnly,
  }
}

const InteractiveCodeEditor = ({
  title,
  template = 'react-ts',
  files,
  options,
  dependencies,
  devDependencies,
  showPreview = true,
}: SandpackProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const providerOptions = useMemo(() => getProviderOptions(options), [options])
  const codeEditorOptions = useMemo(() => getCodeEditorOptions(options), [options])

  const editorHeight = options?.editorHeight ?? 300
  const editorWidthPercentage = options?.editorWidthPercentage ?? 50

  const sandpackFiles =
    files?.reduce((acc, file) => {
      if (!file.code?.filename) {
        return acc
      }

      return {
        ...acc,
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
      <SandpackProvider
        template={stegaClean(template)}
        files={sandpackFiles}
        customSetup={{
          dependencies: processDependencies(dependencies),
          devDependencies: processDependencies(devDependencies),
        }}
        theme={mounted && resolvedTheme === 'dark' ? amethyst : undefined}
        options={providerOptions}
      >
        <SandpackLayout>
          <SandpackCodeEditor
            {...codeEditorOptions}
            style={{
              height: editorHeight,
              flexGrow: editorWidthPercentage,
              flexShrink: editorWidthPercentage,
              flexBasis: 0,
              overflow: 'hidden',
            }}
          />
          {showPreview && (
            <SandpackPreview
              showNavigator={options?.showNavigator}
              style={{
                height: editorHeight,
                flexGrow: 100 - editorWidthPercentage,
                flexShrink: 100 - editorWidthPercentage,
                flexBasis: 0,
              }}
            />
          )}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export default InteractiveCodeEditor
