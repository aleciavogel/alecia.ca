'use client'

import { type FC, useState } from 'react'
import { faRocketLaunch } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NavigationMenuLink } from '@/common/ui/navigation-menu'
import { TeleportAnimation } from '@/common/animations'
import { HappyLittleBracketsLogo } from '@/common/vectors'
import DropdownLink from './dropdown-link'

const LearnToCodeDropdownContent: FC = () => {
  const [isHoveringOverAdvanced, setIsHoveringOverAdvanced] = useState<boolean>(false)

  const handleMouseEnter = (): void => {
    setIsHoveringOverAdvanced(true)
  }

  const handleMouseLeave = (): void => {
    setIsHoveringOverAdvanced(false)
  }

  return (
    <>
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="text-white/80 hover:text-white rounded-lg flex h-full w-full select-none flex-col justify-end hover:bg-white/10 bg-gradient-to-b from-indigo-700/30 dark:from-indigo-800/30 to-indigo-700/60 dark:to-indigo-800/60 p-6 no-underline outline-none focus:shadow-md"
            href="/learn-to-code/happy-little-brackets"
          >
            <HappyLittleBracketsLogo className="w-32 mb-6 fill-white" />
            <p className="text-sm leading-tight">
              Take the first exciting steps into coding, perfect for kids aged 6-10!
            </p>
          </a>
        </NavigationMenuLink>
      </li>

      <DropdownLink href="/learn-to-code/coding-101" title="Coding 101">
        <div className="text-sm text-white/90 font-medium leading-none">
          <FontAwesomeIcon icon={faRocketLaunch} className="mr-2" />
          Coding 101
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-white/60">
          Initiate your coding journey and learn the basics of programming.
        </p>
      </DropdownLink>

      <DropdownLink
        href="/learn-to-code/advanced-projects"
        title="Advanced Projects"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-sm text-white/90 font-medium leading-none">
          <TeleportAnimation
            animationDirection={isHoveringOverAdvanced ? 'forward' : 'backward'}
            className="mr-2"
          />
          Advanced Projects
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-white/60">
          Dive into building real-world apps and learn as you go.
        </p>
      </DropdownLink>
      {/* <StaticNavListItem href="/learn-to-code/shop" title="Shop">
        <div className="text-sm text-white/90 font-medium leading-none">
          <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
          Shop
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-white/60">Rocket-fuel your learning</p>
      </StaticNavListItem> */}
    </>
  )
}

export default LearnToCodeDropdownContent
