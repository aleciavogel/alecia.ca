import { FC } from 'react'
import * as React from 'react'
import type { PortableTextBlock } from 'next-sanity'

import { GalleryPets, NavCard, NavIcons, TextCTA, TextIntro } from '@alecia/blocks'
import { PageQueryResult } from '@alecia/sanity-types'

type ModulesList = NonNullable<PageQueryResult>['modules']

interface BlocksProps {
  modules?: ModulesList
}

export const RenderedBlocks: FC<BlocksProps> = ({ modules }) =>
  modules?.map((module, index) => {
    switch (module._type) {
      case 'gallery.pets':
        return <GalleryPets key={module._key} {...module} />
      case 'nav.card':
        return <NavCard key={module._key} {...module} />
      case 'nav.icons':
        return <NavIcons key={module._key} {...module} />
      case 'text.intro':
        return <TextIntro key={module._key} {...module} body={module.body as PortableTextBlock[]} />
      case 'text.cta':
        return <TextCTA key={module._key} {...module} body={module.body as PortableTextBlock[]} />
      default:
        return null
    }
  })
