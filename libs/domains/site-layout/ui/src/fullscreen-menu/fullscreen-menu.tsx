'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/web'
import Image from 'next/image'
import Link from 'next/link'

import { AleciaLayingIllustration } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

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

export const FullscreenMenu = ({
  animationDuration = 300,
  className,
  open = false,
  ...rest
}: FullscreenMenuProps) => {
  const navRef = useSpringRef()
  const liRef = useSpringRef()
  const closeButtonRef = useSpringRef()

  const bgTransitions = useTransition(open, {
    ref: navRef,
    from: { transform: 'translateX(100%)' }, // Start off-screen to the right
    enter: { transform: 'translateX(0%)' }, // Slide into view
    leave: { transform: 'translateX(100%)' }, // Slide out to the right
    config: config.default,
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
    transform: open ? 'translateY(0px)' : 'translateY(10px)',
    config: { tension: 170, friction: 26 },
  })

  useChain(open ? [navRef, liRef, closeButtonRef] : [liRef, navRef, closeButtonRef], [
    0,
    open ? 0.4 : 0.6,
    open ? 1 : 0.5,
  ])

  return (
    <>
      {bgTransitions((navStyles, item) =>
        item ? (
          <MenuSheetContent asChild forceMount className={cn(className)} {...rest}>
            <animated.nav
              className={cn(
                'fixed right-0 py-16 px-24 flex items-center overflow-hidden',
                'bg-gradient-to-b from-primary-950 from-30% to-fuchsia-600',
              )}
              style={navStyles}
            >
              <ul className="m-0 p-0 space-y-6">
                {liTransitions((style, item) => (
                  <animated.li key={item.name} className="list-style-none" style={style}>
                    <Link
                      href={item.link}
                      className="text-white text-5xl font-serif zigzag-btn after:h-[4px] hover:opacity-70"
                    >
                      {item.name}
                    </Link>
                  </animated.li>
                ))}
              </ul>

              <AleciaLayingIllustration className="absolute bottom-0 right-0 w-1/2" />

              <MenuSheetClose className="absolute z-10 right-4 top-4" asChild>
                <animated.div className="text-white" style={closeButtonSpring}>
                  <Cross2Icon className="h-8 w-8" />
                  <span className="sr-only">Close</span>
                </animated.div>
              </MenuSheetClose>
            </animated.nav>
          </MenuSheetContent>
        ) : null,
      )}
    </>
  )
}
