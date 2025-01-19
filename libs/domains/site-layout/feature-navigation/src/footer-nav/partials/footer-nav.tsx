import type { JSX } from 'react'
import classNames from 'classnames'

import { getSettings } from '@alecia/settings-data-access/server'
import { FooterLink, FooterNavMenu } from '@alecia/site-layout-ui'
import { cn } from '@alecia/util'

export const FooterNav = async (): Promise<JSX.Element> => {
  const data = await getSettings()

  if (!data?.secondaryMenu) return <div />

  const { secondaryMenu } = data

  if (!secondaryMenu.items) return <div />

  return (
    <div
      className={cn(
        'gap-10 sm:gap-8 lg:gap-12',
        'max-md:w-full',
        'max-md:grid max-md:grid-cols-1',
        'md:flex md:justify-end',
        'max-md:mb-6',
        'flex-grow',
      )}
    >
      {secondaryMenu.items.map((menu, index) => {
        const menuKey = `footer-menu-${String(index)}`

        switch (menu._type) {
          case 'link.list':
            return (
              // <div>Hello</div>
              <FooterNavMenu
                key={menuKey}
                label={menu.label ?? 'Untitled'}
                containerClassName={classNames({
                  'hidden xl:block': index > 1,
                })}
              >
                {menu.links?.map((link, linkIndex) => {
                  const itemKey = `footer-menu-${String(index)}-item-${String(linkIndex)}`

                  return (
                    <FooterLink key={itemKey} href={link.slug ?? '#'}>
                      {link.label ?? 'Untitled'}
                    </FooterLink>
                  )
                })}
              </FooterNavMenu>
            )
          default:
            return <div />
        }
      })}
    </div>
  )
}
