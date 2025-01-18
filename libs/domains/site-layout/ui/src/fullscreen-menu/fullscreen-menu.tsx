'use client'

import { forwardRef } from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'
import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/web'
import Link from 'next/link'

import { AleciaLayingIllustration } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { LoopDeLoopText } from '../loop-de-loop-text'
import { MenuSheetClose, MenuSheetContent } from '../menu-sheet'

interface FullscreenMenuProps {
  animationDuration?: number
  open?: boolean
  className?: string
}

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Blog', link: '/blog' },
  { name: 'Portfolio', link: '/projects' },
  { name: 'Coding 101', link: '/coding-101' },
  { name: 'Advanced Projects', link: '/advanced-projects' },
  { name: 'Experiments', link: '/experiments' },
  { name: 'Resources', link: '/resources' },
  { name: 'Resumé', link: '/about/resume' },
  { name: 'Get In Touch', link: '/contact' },
]

export const FullscreenMenu = forwardRef<HTMLElement, FullscreenMenuProps>(
  ({ animationDuration = 300, className, open = false, ...rest }, ref) => {
    const navRef = useSpringRef()
    const liRef = useSpringRef()
    const closeButtonRef = useSpringRef()
    const movingTextRef = useSpringRef()

    const bgTransitions = useTransition(open, {
      ref: navRef,
      from: { transform: 'translateX(100%)' }, // Start off-screen to the right
      enter: { transform: 'translateX(0%)' }, // Slide into view
      leave: { transform: 'translateX(100%)' }, // Slide out to the right
      config: config.default,
    })

    const movingTextTransitions = useTransition(open, {
      ref: movingTextRef,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    })

    const liTransitions = useTransition(open ? menuItems : [], {
      ref: liRef,
      keys: (item) => item.name,
      trail: 400 / menuItems.length,
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(20px)' },
    })

    const closeButtonSpring = useSpring({
      opacity: open ? 1 : 0,
      transform: open ? 'rotate(-270deg)' : 'rotate(270deg)',
      config: { tension: 170, friction: 26 },
    })

    useChain(
      open
        ? [navRef, liRef, movingTextRef, closeButtonRef]
        : [liRef, movingTextRef, navRef, closeButtonRef],
      [
        /** Time steps */
        0,
        open ? 0.4 : 0.1,
        open ? 0.3 : 0.6,
        open ? 1 : 0.5,
      ],
    )

    return (
      <>
        {bgTransitions((navStyles, item) =>
          item ? (
            <MenuSheetContent asChild forceMount className={cn(className)} {...rest}>
              <animated.nav
                ref={ref}
                className={cn(
                  'fixed right-0 py-16 px-24 flex items-center',
                  'bg-gradient-to-b from-primary-950 from-30% to-fuchsia-600',
                )}
                style={navStyles}
              >
                <ul className="m-0 p-0 space-y-6">
                  {liTransitions((style, item) => (
                    <animated.li key={item.name} className="list-style-none" style={style}>
                      <Link
                        href={item.link}
                        className={cn(
                          'text-white text-5xl font-serif zigzag-btn after:h-[4px] hover:text-accent-200/80',
                          'transition-all duration-300 ease-in-out',
                        )}
                      >
                        {item.name}
                      </Link>
                    </animated.li>
                  ))}
                </ul>

                <AleciaLayingIllustration className="absolute bottom-0 right-0 w-1/2" />

                {movingTextTransitions((style, item) =>
                  item ? (
                    <animated.div className="absolute -top-4 left-1/3 h-full z-[-1]" style={style}>
                      <LoopDeLoopText className="text-accent-300/30" />
                    </animated.div>
                  ) : null,
                )}

                <MenuSheetClose className="absolute z-10 right-3 md:right-6 top-4 md:top-6" asChild>
                  <animated.div className="text-white" style={closeButtonSpring}>
                    <Cross2Icon className="h-9 w-9" />
                    <span className="sr-only">Close</span>
                  </animated.div>
                </MenuSheetClose>
              </animated.nav>
            </MenuSheetContent>
          ) : null,
        )}
      </>
    )
  },
)
