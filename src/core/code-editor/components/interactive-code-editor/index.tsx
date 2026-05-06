'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  SandpackFileExplorer,
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
import HighlightedEditor from './highlighted-editor'

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
  const readOnly = options?.readOnly ?? false
  return {
    showTabs: options?.showTabs,
    // Force line numbers on when read-only (globally or per-file) unless explicitly disabled
    showLineNumbers: options?.showLineNumbers ?? (readOnly ? true : undefined),
    showInlineErrors: options?.showInlineErrors,
    showRunButton: options?.showRunButton ?? false,
    wrapContent: options?.wrapContent,
    closableTabs: options?.closeableTabs,
    initMode: options?.initMode,
    // readOnly is intentionally NOT included here — see HighlightedEditor for why
  }
}

const InteractiveCodeEditor = ({
  title,
  template = 'react-ts',
  files,
  options,
  dependencies,
  devDependencies,
}: SandpackProps) => {
  const showPreview = options?.showPreview ?? true
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const providerOptions = useMemo(() => getProviderOptions(options), [options])
  const codeEditorOptions = useMemo(() => getCodeEditorOptions(options), [options])

  const editorHeight = options?.editorHeight ?? 300
  const editorWidthPercentage = options?.editorWidthPercentage ?? 50

  const { sandpackFiles, highlightedLinesMap, readOnlyFiles } = useMemo(() => {
    const fileMap: Record<
      string,
      { code: string; hidden: boolean; readOnly: boolean; active: boolean }
    > = {}
    const linesMap: Record<string, number[]> = {}
    const readOnlySet = new Set<string>()

    for (const file of files ?? []) {
      const rawFilename = stegaClean(file.code?.filename)
      if (!rawFilename) continue
      // Sandpack normalizes all paths to start with "/", so we must match that
      // format here — otherwise lookups via sandpack.activeFile will miss.
      const filename = rawFilename.startsWith('/') ? rawFilename : `/${rawFilename}`

      // Never set readOnly in the file config — doing so triggers Sandpack's broken
      // render path that hides line numbers. We handle it via a CodeMirror extension instead.
      fileMap[filename] = {
        code: stegaClean(file.code?.code) ?? '',
        hidden: file.hidden ?? false,
        readOnly: false,
        active: file.active ?? true,
      }

      if (file.readOnly) {
        readOnlySet.add(filename)
      }

      const lines = file.code?.highlightedLines
      if (lines && lines.length > 0) {
        linesMap[filename] = lines
      }
    }

    return { sandpackFiles: fileMap, highlightedLinesMap: linesMap, readOnlyFiles: readOnlySet }
  }, [files])

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
          {options?.showFileExplorer && <SandpackFileExplorer style={{ height: editorHeight }} />}
          <HighlightedEditor
            highlightedLinesMap={highlightedLinesMap}
            readOnlyFiles={readOnlyFiles}
            globalReadOnly={options?.readOnly ?? false}
            editorOptions={codeEditorOptions}
            height={editorHeight}
            widthPercentage={editorWidthPercentage}
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
