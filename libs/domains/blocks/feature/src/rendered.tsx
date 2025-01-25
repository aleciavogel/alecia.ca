import * as React from 'react'
import dynamic from 'next/dynamic'
import type { PortableTextBlock } from 'next-sanity'

const AccordionList = dynamic(() => import('./accordion-list'))
const ArticleList = dynamic(() => import('./article-list'))
const CourseList = dynamic(() => import('./course-list'))
const GalleryPets = dynamic(() => import('./gallery-pets'))
const NavCard = dynamic(() => import('./nav-card'))
const NavIcons = dynamic(() => import('./nav-icons'))
const TextAsideList = dynamic(() => import('./text-aside-list'))
const TextCTA = dynamic(() => import('./text-cta'))
const TextIntro = dynamic(() => import('./text-intro'))
const ImageWithText = dynamic(() => import('./image-with-text'))
const TextBlockquote = dynamic(() => import('./text-blockquote'))

// TODO: attempt to fix the type later
interface BlocksProps {
  modules?: any[] | null
}

const RenderedBlocks = ({ modules }: BlocksProps) =>
  modules?.map((module) => {
    switch (module._type) {
      case 'accordion-list':
        return <AccordionList key={module._key} {...module} />
      case 'course-list':
        return <CourseList key={module._key} {...module} />
      case 'gallery.pets':
        return <GalleryPets key={module._key} {...module} />
      case 'image-with-text':
        return <ImageWithText key={module._key} {...module} />
      case 'nav.card':
        return <NavCard key={module._key} {...module} />
      case 'nav.icons':
        return <NavIcons key={module._key} {...module} />
      case 'text.aside-list':
        return (
          <TextAsideList key={module._key} {...module} body={module.text as PortableTextBlock[]} />
        )
      case 'text.cta':
        return <TextCTA key={module._key} {...module} body={module.body as PortableTextBlock[]} />
      case 'text.intro':
        return <TextIntro key={module._key} {...module} body={module.body as PortableTextBlock[]} />
      case 'text.blockquote':
        return <TextBlockquote key={module._key} {...module} />
      default:
        return null
    }
  })

export default RenderedBlocks
