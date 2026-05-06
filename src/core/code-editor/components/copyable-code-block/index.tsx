'use client'

import { useCallback, useState } from 'react'
import { faCheck, faCopy } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@alecia/util/styles'

interface CopyableCodeBlockProps {
  code: string
  language?: string
  filename?: string
}

const CopyableCodeBlock = ({ code, language, filename }: CopyableCodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className="w-full max-w-screen-sm mx-auto rounded-lg overflow-hidden bg-primary-900 dark:bg-primary-950 border border-primary-700/30">
      <div className="flex items-center justify-between px-4 py-2 bg-primary-800/50 dark:bg-primary-900/50 border-b border-primary-700/30">
        <span className="text-xs text-primary-400 font-mono">{filename ?? language ?? 'code'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors',
            copied
              ? 'text-green-400 bg-green-900/30'
              : 'text-primary-400 hover:text-white hover:bg-primary-700/50',
          )}
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-primary-200 leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CopyableCodeBlock
