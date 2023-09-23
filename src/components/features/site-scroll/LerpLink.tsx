import { type FC } from 'react'
import Link, { type LinkProps } from 'next/link'
import { cn } from '@/lib/utils'

const DEFAULT_DELAY = 0.05
const DEFAULT_SPEED = 1

interface LerpLinkProps extends LinkProps {
  children?: React.ReactNode
  className?: string
  scrollDelay?: number
  lerp?: boolean
  scrollSpeed?: number
  onClick?: () => void
}

const LerpLink: FC<LerpLinkProps> = ({
  children,
  className,
  scrollDelay = DEFAULT_DELAY,
  scrollSpeed = DEFAULT_SPEED,
  ...props
}) => {
  const stringContent = typeof children === 'string' ? children : ''
  const characters = stringContent.split('')

  return (
    <Link className={cn('zigzag-link-no-pseudo', className)} {...props}>
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
      <div
        data-scroll
        data-scroll-speed={scrollSpeed.toString()}
        deta-scroll-delay={(characters.length * scrollDelay).toFixed(2)}
      ></div>
    </Link>
  )
}

export default LerpLink
