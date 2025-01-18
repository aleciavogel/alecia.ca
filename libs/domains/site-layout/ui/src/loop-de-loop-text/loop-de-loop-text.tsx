'use client'

import { animated, easings, useSpring } from '@react-spring/web'

import { VectorProps } from '@alecia/types'

interface LoopDeLoopTextProps extends VectorProps {
  text?: string[]
  separator?: string
}

export const LoopDeLoopText = ({
  text = [
    'ux enthusiast',
    'advocate',
    'writer',
    'musician',
    'award-winning baker',
    'podcast host',
    'problem-solver',
    'designer',
    'developer',
  ],
  separator = ' • ',
  ...props
}: LoopDeLoopTextProps) => {
  const spring = useSpring({
    from: { startOffset: -8900 },
    to: { startOffset: 0 },
    config: (key) => ({
      mass: 10,
      tension: 1,
      friction: 30,
      easing: easings.easeOutExpo, // Easing for fast start and slow finish
    }),
    loop: true, // Enable continuous animation
  })
  const textWithSeparators = [...new Array(4)].map(() => text.join(separator)).join(separator)

  const AnimatedTextPath = animated('textPath') // Wrap textPath with animated()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 994 729"
      width={994}
      height={729}
      {...props}
    >
      <path
        id="text-curve"
        fill="none"
        d="M1 0v7.6c0 5.7-.5 11.8.2 17.5 2.2 18 3.6 36 8.4 53.7 16.4 59.7 34.6 98.9 92.8 127.6 54.3 26.7 114.5 16 170.8 32.2 18 5.2 35.1 14.2 51.5 23.1 44.7 24.2 75.7 64 112 98.2 69.1 65 150.6 119.8 248.6 118.5 73.2-.9 71.2-90.4 59.4-141.5-12.1-52-43.2-102.3-95.7-120.7-20.5-7.1-54.3-11.8-75.9-5.9-40.5 10.9-99.9 64.3-107.2 106.2-23.4 135.9 64.5 221 158.4 304.3 44.8 39.8 85.2 74.3 144.2 90.7 66.5 18.6 136.3 17.1 204.7 17.1h170.4"
      />

      <text y="40" fontSize="36" fontWeight="500">
        <AnimatedTextPath id="text-path" href="#text-curve" className="fill-current" {...spring}>
          {textWithSeparators}
        </AnimatedTextPath>
      </text>
    </svg>
  )
}
