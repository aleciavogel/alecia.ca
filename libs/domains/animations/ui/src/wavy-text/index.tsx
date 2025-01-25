'use client'

import { animated, easings, useSpring } from '@react-spring/web'

import { VectorProps } from '@alecia/types/svg'
import { cn } from '@alecia/util/styles'

interface WavyTextProps extends VectorProps {
  text?: string
  separator?: string
}

const WavyText = ({
  text = 'ux enthusiast • collaborator • bug whisperer • technophile • generalist • podcast host • problem-solver • designer • developer',
  separator = ' • ',
  className,
  ...props
}: WavyTextProps) => {
  const spring = useSpring({
    from: { startOffset: '-118%' },
    to: { startOffset: '0%' },
    config: {
      duration: 80000,
      easing: easings.linear,
    },
    loop: true,
  })

  const textWithSeparators = [...new Array(4)].map(() => text).join(separator)

  const AnimatedTextPath = animated('textPath') // Wrap textPath with animated()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 37.5"
      className={cn('w-full', className)}
      {...props}
    >
      <path
        id="text-squiggle-path"
        d="M 0 25
       C 10 25 20 12.5 33 12.5
       C 46 12.5 56 25 70 25
       C 84 25 94 12.5 108 12.5
       C 122 12.5 132 25 145 25
       C 159 25 169 12.5 183 12.5
       C 197 12.5 207 25 220 25
       C 234 25 244 12.5 258 12.5
       C 272 12.5 282 25 296 25"
        fill="none"
      />
      <text y="160" fontSize="6" fontWeight="500">
        <AnimatedTextPath
          id="text-path"
          href="#text-squiggle-path"
          className="fill-current"
          {...spring}
        >
          {textWithSeparators}
        </AnimatedTextPath>
      </text>
    </svg>
  )
}

export default WavyText
