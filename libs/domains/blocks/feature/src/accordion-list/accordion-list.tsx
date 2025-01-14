import { PortableTextBlock } from 'next-sanity'

import { BlogPortableText } from '@alecia/blog'
import type { AccordionList as AccordionListProps } from '@alecia/sanity-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from '@alecia/ui-kit'

import { AccordionPortableText } from './accordion-portable-text'

// TODO: Add different layouts for the accordion list

export const AccordionList = ({ pretitle, heading, intro, items }: AccordionListProps) => {
  return (
    <div className="max-w-screen-sm mx-auto space-y-10">
      <div className="text-center space-y-6">
        {pretitle ? <Typography variant="blockPretitle">{pretitle}</Typography> : null}
        {heading ? (
          <Typography variant="blockTitle" className="text-4xl">
            {heading}
          </Typography>
        ) : null}
        {intro ? (
          <Typography
            variant="p"
            className="text-primary-950 dark:text-primary-300 max-w-[300px] max-md:mx-auto lg:text-[1.125rem] lg:leading-relaxed"
          >
            <BlogPortableText value={intro as PortableTextBlock[]} />
          </Typography>
        ) : null}
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items?.map((item, index) => (
          <AccordionItem value={item._key}>
            <AccordionTrigger className="text-base">{item.trigger}</AccordionTrigger>
            <AccordionContent className="">
              <AccordionPortableText value={item.content as PortableTextBlock[]} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
