'use client'

import { ReactNode } from 'react'
import { animated, config, useTransition } from '@react-spring/web'

import { InterceptedModalClose, InterceptedModalContent } from '@alecia/intercepted-ui'
import { Button } from '@alecia/ui-kit'

interface AnimatedInterceptedModalProps {
  animationDuration?: number
  open?: boolean
  children: ReactNode
}

export const AnimatedInterceptedModal = ({
  animationDuration = 300,
  children,
  open = false,
}: AnimatedInterceptedModalProps) => {
  const transitions = useTransition(open, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    config: {
      ...config.slow,
      duration: animationDuration,
    },
  })

  return (
    <>
      {transitions((styles, item) =>
        item ? (
          <InterceptedModalContent asChild forceMount>
            <animated.div className="bg-red-600 opacity-0" style={styles}>
              {children}
              <InterceptedModalClose>
                <Button className="rounded bg-primary px-4 py-2">Close</Button>
              </InterceptedModalClose>
            </animated.div>
          </InterceptedModalContent>
        ) : null,
      )}
    </>
  )
}
