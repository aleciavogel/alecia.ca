'use client'

import { type FC, useCallback, useState } from 'react'
import Highlight, { defaultProps, type Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import CodeSnippetCopy from './CodeSnippetCopy'

interface Props {
  codeString: string
  language: Language
  isLive?: boolean
  ghSource?: string
  codeTitle?: string
}

const CodeSnippet: FC<Props> = ({ codeString, language, isLive = false, codeTitle, ghSource }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [keepShowingCopy, setKeepShowingCopy] = useState<boolean>(false)

  const handleClipboard = useCallback(() => {
    const type = 'text/plain'
    const blob = new Blob([codeString], { type })
    const data = [new ClipboardItem({ [type]: blob })]
    navigator.clipboard.write(data).then(
      () => {
        setIsCopied(true)
        setKeepShowingCopy(true)
        setTimeout(() => {
          setKeepShowingCopy(false)
        }, 3000)
        setTimeout(() => {
          setIsCopied(false)
        }, 3300) // Change text after it hides again
      },
      () => {
        console.warn('Clipboard failed to copy code snippet :(')
      },
    )
  }, [setIsCopied, setKeepShowingCopy, codeString])

  if (isLive) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    const classNames: string[] = ['gatsby-highlight']

    if (codeTitle !== undefined) {
      classNames.push('has-code-title')
    }

    const codeSourceComponent = (
      <a className="gatsby-code-source" href={ghSource} target="_blank" rel="noreferrer">
        <span>View on GitHub</span>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    )

    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={classNames.join(' ')}>
            {Boolean(codeTitle) && (
              <div className="gatsby-code-title">
                {codeTitle}
                {codeSourceComponent}
              </div>
            )}
            <CodeSnippetCopy
              onCopy={handleClipboard}
              isCopied={isCopied}
              showCopied={keepShowingCopy}
            />
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
            {Boolean(ghSource) && codeTitle === undefined && codeSourceComponent}
          </div>
        )}
      </Highlight>
    )
  }
}

export default CodeSnippet
