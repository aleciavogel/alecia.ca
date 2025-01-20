import { FC } from 'react'
import * as React from 'react'
import dynamic from 'next/dynamic'
import type { PortableTextBlock } from 'next-sanity'

const AccordionList = dynamic(() => import('@alecia/blocks').then((mod) => mod.AccordionList))
const CourseList = dynamic(() => import('@alecia/blocks').then((mod) => mod.CourseList))
const GalleryPets = dynamic(() => import('@alecia/blocks').then((mod) => mod.GalleryPets))
const NavCard = dynamic(() => import('@alecia/blocks').then((mod) => mod.NavCard))
const NavIcons = dynamic(() => import('@alecia/blocks').then((mod) => mod.NavIcons))
const TextAsideList = dynamic(() => import('@alecia/blocks').then((mod) => mod.TextAsideList))
const TextCTA = dynamic(() => import('@alecia/blocks').then((mod) => mod.TextCTA))
const TextIntro = dynamic(() => import('@alecia/blocks').then((mod) => mod.TextIntro))
const ImageBlock = dynamic(() => import('@alecia/blocks').then((mod) => mod.ImageWithText))

// TODO: attempt to fix the type later
interface BlocksProps {
  modules?: any[] | null
}

export const RenderedBlocks: FC<BlocksProps> = ({ modules }) =>
  modules?.map((module) => {
    switch (module._type) {
      case 'accordion-list':
        return <AccordionList key={module._key} {...module} />
      case 'gallery.pets':
        return <GalleryPets key={module._key} {...module} />
      case 'image-with-text':
        return <ImageBlock key={module._key} {...module} />
      case 'nav.card':
        return <NavCard key={module._key} {...module} />
      case 'nav.icons':
        return <NavIcons key={module._key} {...module} />
      case 'text.intro':
        return <TextIntro key={module._key} {...module} body={module.body as PortableTextBlock[]} />
      case 'text.cta':
        return <TextCTA key={module._key} {...module} body={module.body as PortableTextBlock[]} />
      case 'text.aside-list':
        return (
          <TextAsideList key={module._key} {...module} body={module.text as PortableTextBlock[]} />
        )
      case 'course-list':
        return <CourseList key={module._key} {...module} />
      default:
        return null
    }
  })
