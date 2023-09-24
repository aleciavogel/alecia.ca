import React, { type FC } from 'react'
import Link from 'next/link'

import { type DefaultColor } from '@/types/colors'
import AleciaSitSvg from '@/components/vectors/AleciaSitSvg'
import SocialLinks from '@/components/layout/SocialLinks'

interface Props {
  accentColor?: DefaultColor
  primaryColor?: DefaultColor
}

const SiteFooter: FC<Props> = ({ accentColor = 'pink', primaryColor = 'indigo' }) => {
  return (
    <footer id="site-footer" role="contentinfo">
      <div className="mb-4 mx-auto flex-wrap md:flex-nowrap sm:flex sm:items-center sm:justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
        <div
          className={
            'relative md:after:site-footer-svg-bg-cover z-50 ' +
            'max-lg:mx-auto max-lg:w-48 ' +
            '-mt-16 md:-mt-28 lg:-mt-28 ' +
            'md:-mb-24 lg:-mb-24 ' +
            'md:mr-6 lg:mr-8'
          }
        >
          <AleciaSitSvg className="block h-48 lg:h-80" />
        </div>
        <div className="py-5 md:mr-6 lg:mr-12 md:max-lg:max-w-[240px]">
          <h2 className="font-serif text-4xl lg:text-5xl mb-2 text-center md:text-left">
            Alecia Vogel
          </h2>
          <p className="text-white text-sm lg:text-lg leading-relaxed md:mb-3 max-md:text-center max-sm:px-10 sm:max-md:px-16 w-full sm:w-3/4 mx-auto md:mx-0">
            is a <strong className="font-bold">full stack web developer</strong> and{' '}
            <strong className="font-bold">digital product designer</strong> living in downtown
            Edmonton.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 w-full md:w-3/4 max-md:mt-8 md:-mt-4">
          <div className="text-white max-md:pb-5 max-md:mb-8">
            <h2 className="mb-2 md:mb-3 font-bold text-lg lg:text-xl max-md:text-center">
              Explore
            </h2>
            <ul className="space-y-2 md:space-y-3 text-sm max-md:text-center">
              <li>
                <Link href="/blog">Blog Articles</Link>
              </li>
              <li>
                <Link href="/learn-to-code">Learn To Code</Link>
              </li>
              <li>
                <Link href="/playground/resources">Links & Resources</Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-2 md:mb-3 font-bold text-md lg:text-xl max-md:text-center">
              Get To Know Me
            </h2>
            <ul className="space-y-2 md:space-y-3 text-sm max-md:text-center">
              <li>
                <Link href="/about/alecia">About Alecia</Link>
              </li>
              <li>
                <Link href="/about/projects">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-800 sm:mx-auto lg:my-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl" />
      <div className="w-full mx-auto md:grid md:grid-cols-3 md:gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
        <div className="max-md:hidden"></div>
        <p className="text-gray-400 text-xs lg:text-sm text-center mt-2 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Alecia Vogel. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default SiteFooter
