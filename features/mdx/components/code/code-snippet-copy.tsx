import { type FC } from 'react'
import Confetti from 'react-dom-confetti'

const CONFETTI_CONFIG = {
  angle: 90,
  spread: 200,
  startVelocity: 40,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

interface Props {
  isCopied: boolean
  showCopied: boolean
  onCopy: () => void
}

const CodeSnippetCopy: FC<Props> = ({ isCopied, onCopy, showCopied }) => {
  return (
    <div className={`copy-code-block${showCopied ? ' still-visible' : ''}`}>
      <button onClick={onCopy}>
        <span>{isCopied ? '🎉 Copied!' : 'Copy'}</span>
      </button>
      <Confetti active={isCopied} config={CONFETTI_CONFIG} />
    </div>
  )
}

export default CodeSnippetCopy
