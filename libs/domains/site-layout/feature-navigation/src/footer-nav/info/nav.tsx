import classNames from 'classnames'

import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import FooterLink from '@alecia/site-layout-ui/footer/link'
import FooterNavMenu from '@alecia/site-layout-ui/footer/nav-menu'
import { cn } from '@alecia/util/styles'

const FooterNav = async () => {
  const data = await getData<SettingsQueryResult>(settingsQuery, {}, ['settings'])

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

export default FooterNav
