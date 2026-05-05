import classNames from 'classnames'

import FooterLink from '@alecia/core/layout/components/footer/link'
import FooterNavMenu from '@alecia/core/layout/components/footer/nav-menu'
import { cn } from '@alecia/util/styles'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

const FooterNav = async () => {
  const { data } = await sanityFetch({ query: settingsQuery })

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
