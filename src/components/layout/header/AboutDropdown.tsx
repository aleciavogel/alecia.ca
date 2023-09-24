'use client'
import { type FC } from 'react'
import Image from 'next/image'

import { Avatar } from '@/components/ui/avatar'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import aleciaIcon from '@/images/alecia_icon.png'

const AboutDropdownContent: FC = () => {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a
          className="rounded-lg flex h-full w-full select-none flex-col justify-end bg-gradient-to-b from-indigo-700/30 dark:from-indigo-800/30 to-indigo-700/60 dark:to-indigo-800/60 p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          <Avatar className="h-28 w-28">
            <Image
              src={aleciaIcon}
              alt="Image of Alecia Vogel wearing a blazer in front of a blue and gold mural in Downtown Edmonton"
            />
          </Avatar>

          <div className="mb-1 mt-4 text-lg text-white font-medium">Alecia Vogel</div>
          <p className="text-sm leading-tight text-white/80">
            is a full-stack software developer living in downtown Edmonton.
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default AboutDropdownContent
