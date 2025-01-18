'use client'

import { forwardRef, useMemo } from 'react'
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

import { FullScreenMenuType, SocialLinksType } from '@alecia/settings-types'
import { AleciaLayingIllustration } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { LoopDeLoopText } from '../loop-de-loop-text'
import { MenuSheetClose, MenuSheetContent, MenuSheetTitle } from '../menu-sheet'
import { SocialLink } from '../social-link'

type MenuItem = NonNullable<FullScreenMenuType>[number]

interface FullscreenMenuProps {
  animationDuration?: number
  open?: boolean
  className?: string
  fullScreenMenu: FullScreenMenuType
  social: SocialLinksType
}

export const FullscreenMenu = forwardRef<HTMLElement, FullscreenMenuProps>(
  ({ fullScreenMenu, social, animationDuration = 300, className, open = false, ...rest }, ref) => {
    const navRef = useSpringRef()
    const liRef = useSpringRef()
    const closeButtonRef = useSpringRef()
    const movingTextRef = useSpringRef()
    const socialLinksRef = useSpringRef()
    const menuItems = useMemo<MenuItem[]>(
      () => (fullScreenMenu ? fullScreenMenu : []),
      [fullScreenMenu],
    )

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
      keys: (item: MenuItem) => item._key,
      trail: 400 / menuItems.length,
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(20px)' },
    })

    const socialLinksTransitions = useTransition(open ? (social ? social : []) : [], {
      ref: socialLinksRef,
      keys: (item) => item._key,
      trail: 400 / (social?.length ?? 1),
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
        ? [navRef, liRef, socialLinksRef, movingTextRef, closeButtonRef]
        : [liRef, socialLinksRef, movingTextRef, navRef, closeButtonRef],
      [
        /** Time steps */
        0,
        open ? 0.4 : 0.1,
        open ? 0.8 : 0.1,
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
                  'fixed right-0 flex items-center max-md:justify-center',
                  'bg-gradient-to-b from-violet-950 from-30% to-fuchsia-600',
                )}
                style={navStyles}
              >
                <MenuSheetTitle className="sr-only">
                  <p>Site Menu</p>
                </MenuSheetTitle>

                <div className="h-screen overflow-y-scroll w-full">
                  <div
                    className={cn(
                      'max-md:bg-gradient-to-t max-md:from-fuchsia-600 to-30% max-md:to-transparent',
                      'pointer-events-none z-[2]',
                      'absolute bottom-0 left-0',
                      'w-full h-full',
                    )}
                  />
                  <div className="w-full py-16 px-6 md:px-24 max-md:pb-[175px] max-md:pt-24">
                    <ul className="m-0 p-0 space-y-4 max-md:text-center md:space-y-8 overflow-y-auto relative z-[1]">
                      {liTransitions((style, item) => (
                        <animated.li key={item.label} className="list-style-none" style={style}>
                          <Link
                            href={item.slug ?? '#'}
                            className={cn(
                              'text-white text-2xl md:text-5xl font-serif zigzag-btn after:h-[4px] hover:text-accent-200/80',
                              'transition-all duration-300 ease-in-out',
                            )}
                          >
                            {item.label}
                          </Link>
                        </animated.li>
                      ))}
                      <li className="pt-8 md:pt-4">
                        <ul className="m-0 p-0 flex gap-8 md:gap-6 max-md:justify-center">
                          {socialLinksTransitions((style, item) => (
                            <animated.li
                              key={`fullscreen-${item._key}`}
                              className="list-style-none"
                              style={style}
                            >
                              <SocialLink
                                {...item}
                                className="text-white text-2xl md:text-5xl hover:text-accent-200/80 transition-all duration-300 ease-in-out"
                              />
                            </animated.li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <AleciaLayingIllustration className="pointer-events-none absolute bottom-0 right-0 w-full md:w-1/2 max-md:pl-6 z-[3]" />

                {movingTextTransitions((style, item) =>
                  item ? (
                    <animated.div
                      className="absolute -top-4 left-2/3 md:left-1/3 h-full z-[-1]"
                      style={style}
                    >
                      <LoopDeLoopText className="text-fuchsia-300/20 md:text-fuchsia-300/30" />
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
