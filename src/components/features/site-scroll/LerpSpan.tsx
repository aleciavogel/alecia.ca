import { cn } from '@/lib/utils'
import { type FC } from 'react'

const DEFAULT_DELAY = 0.01
const DEFAULT_SPEED = 1

interface LerpSpanProps {
  children?: React.ReactNode
  className?: string
  scrollDelay?: number
  lerp?: boolean
  scrollSpeed?: number
}

const LerpSpan: FC<LerpSpanProps> = ({
  children,
  className,
  scrollDelay = DEFAULT_DELAY,
  scrollSpeed = DEFAULT_SPEED,
  ...props
}) => {
  const stringContent = typeof children === 'string' ? children : ''
  const characters = stringContent.split('')

  return (
    <span className={cn('inline-block', className)} {...props}>
      {characters.map((char, index) => (
        <span
          className="inline-block"
          key={`lerp-${encodeURIComponent(stringContent)}-${index}`}
          data-scroll
          data-scroll-speed={scrollSpeed.toString()}
          data-scroll-delay={(scrollDelay * (characters.length - index)).toFixed(2)}
        >
          {char === ' ' ? <>&nbsp;</> : char}
        </span>
      ))}
    </span>
  )
}

export default LerpSpan
