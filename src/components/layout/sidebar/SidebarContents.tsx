import { type FC } from 'react'
import Link from 'next/link'

import { SIDEBAR_NAV } from '@/config/sidebar'
import { SheetContent } from '@/components/ui/sheet'
import MenuIllustration from './MenuIllustration'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

/**
 * TODO: Add scrollable area if it expands to where the vector illustration is (or if
 * the browser is resized to be shorter)
 */
const SidebarContents: FC = () => {
  return (
    <SheetContent side="right" className="z-[200] text-white">
      <div className="grid gap-4 py-4">
        <Accordion type="single" collapsible>
          {SIDEBAR_NAV.map((navItem, index) => {
            if (navItem.items !== undefined) {
              return (
                <AccordionItem
                  key={`nav-${index}`}
                  value={`nav-${index}`}
                  className="border-none text-lg"
                >
                  <AccordionTrigger>
                    <span className="text-base">{navItem.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {navItem.items.map((item, index) => (
                        <Link
                          key={`nav-${index}`}
                          href={item.href ?? ''}
                          className="block text-white/80 hover:text-white transition-colors duration-200"
                        >
                          {item.icon !== undefined && (
                            <FontAwesomeIcon icon={item.icon} className="inline-block w-4 mr-3" />
                          )}
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            } else {
              return (
                <Link
                  key={`nav-${index}`}
                  href={navItem.href ?? ''}
                  className="block hover:underline py-4"
                >
                  {navItem.icon !== undefined && (
                    <FontAwesomeIcon icon={navItem.icon} className="mr-2" />
                  )}
                  {navItem.title}
                </Link>
              )
            }
          })}
        </Accordion>
        <div className="mt-1 space-x-4">
          <Link
            href="https://github.com/aleciavogel"
            className="text-2xl hover:text-accent-300 transition-colors duration-200"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <Link
            href="https://linkedin.com/in/alecia-vogel"
            className="text-2xl hover:text-accent-300 transition-colors duration-200"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link
            href="https://dribbble.com/aleciavogel"
            className="text-2xl hover:text-accent-300 transition-colors duration-200"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faDribbble} />
          </Link>

          <Link
            href="https://twitter.com/aleciavogel"
            className="text-2xl hover:text-accent-300 transition-colors duration-200"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
      <div className="absolute w-full bottom-0 left-0">
        <MenuIllustration />
      </div>
    </SheetContent>
  )
}

export default SidebarContents
