'use client'

import { useMemo } from 'react'
import { EditorState, type Extension } from '@codemirror/state'
import { Decoration, type DecorationSet, EditorView, ViewPlugin } from '@codemirror/view'
import { SandpackCodeEditor, useSandpack } from '@codesandbox/sandpack-react'

interface HighlightedEditorProps {
  /** Map of filename → 1-based line numbers to highlight */
  highlightedLinesMap: Record<string, number[]>
  /** Set of filenames that should be read-only */
  readOnlyFiles: Set<string>
  /** Whether the entire editor is globally read-only */
  globalReadOnly: boolean
  editorOptions: Record<string, unknown>
  height: number
  widthPercentage: number
}

/**
 * Creates a CodeMirror extension that highlights the given 1-based line numbers.
 *
 * SandpackCodeEditor removed the `decorators` prop in @codesandbox/sandpack-react >=2.19,
 * so we replicate the behaviour via a ViewPlugin passed through the `extensions` prop.
 */
function createLineHighlightExtension(lines: number[]): Extension {
  const lineDeco = Decoration.line({ attributes: { class: 'sp-highlighted-line' } })

  return ViewPlugin.fromClass(
    class {
      decorations: DecorationSet

      constructor(view: EditorView) {
        const ranges = lines
          .filter((n) => n > 0 && n <= view.state.doc.lines)
          .map((n) => lineDeco.range(view.state.doc.line(n).from))
          .sort((a, b) => a.from - b.from)

        this.decorations = ranges.length > 0 ? Decoration.set(ranges) : Decoration.none
      }

      update() {
        // Decorations are static per-file; Sandpack re-creates the editor on file switch.
      }
    },
    { decorations: (v) => v.decorations },
  )
}

/**
 * Must be rendered inside a SandpackProvider so that useSandpack() is available.
 * Reads the currently active file and applies line decorators for any highlighted lines.
 *
 * IMPORTANT: We intentionally never pass `readOnly` to SandpackCodeEditor.
 * In Sandpack >=2.19.11 passing readOnly=true causes it to render a plain <pre><code>
 * instead of the full CodeMirror editor, which means line numbers disappear.
 * Instead we use EditorState.readOnly.of(true) as a CodeMirror extension, which
 * keeps the full editor while blocking edits.
 */
const HighlightedEditor = ({
  highlightedLinesMap,
  readOnlyFiles,
  globalReadOnly,
  editorOptions,
  height,
  widthPercentage,
}: HighlightedEditorProps) => {
  const { sandpack } = useSandpack()
  const activeFile = sandpack.activeFile

  const linesToHighlight = highlightedLinesMap[activeFile] ?? []
  const isReadOnly = globalReadOnly || readOnlyFiles.has(activeFile)

  const extensions = useMemo(() => {
    const exts: Extension[] = []
    if (isReadOnly) exts.push(EditorState.readOnly.of(true))
    if (linesToHighlight.length > 0) exts.push(createLineHighlightExtension(linesToHighlight))
    return exts
  }, [isReadOnly, linesToHighlight])

  return (
    <>
      {/* Scoped style for highlighted lines */}
      {linesToHighlight.length > 0 && (
        <style>{`
          .sp-highlighted-line {
            background: rgb(var(--accent-200) / 0.12);
            display: block;
            width: 100%;
            border-left: 2px solid rgb(var(--accent-500) / 0.6);
          }
        `}</style>
      )}
      <SandpackCodeEditor
        {...(editorOptions as any)}
        extensions={extensions}
        style={{
          height,
          flexGrow: widthPercentage,
          flexShrink: widthPercentage,
          flexBasis: 0,
          overflow: 'hidden',
        }}
      />
    </>
  )
}

export default HighlightedEditor
