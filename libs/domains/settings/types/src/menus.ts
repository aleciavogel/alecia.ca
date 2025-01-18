import { SettingsQueryResult } from '@alecia/sanity-types'

export type SiteSettingsType = NonNullable<SettingsQueryResult>
export type SocialLinksType = SiteSettingsType['social']
export type SocialLinkType = NonNullable<SocialLinksType>[number]
export type FullScreenMenuType = SiteSettingsType['fullscreenMenu']
export type StaticMenuType = SiteSettingsType['mainMenu']
export type FooterMenuType = SiteSettingsType['secondaryMenu']
