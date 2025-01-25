import { PortableTextBlock } from 'next-sanity'

import { AccordionListBlockType } from '@alecia/block-types'
import { BlogPortableText } from '@alecia/blog/blog-portable-text'
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot as Accordion,
  AccordionTrigger,
} from '@alecia/ui-kit/ui/accordion'
import { Typography } from '@alecia/ui-kit/ui/typography'

// TODO: Add different layouts for the accordion list (centered, next to text, etc)

const AccordionList = ({ pretitle, heading, intro, items }: AccordionListBlockType) => {
  return (
    <div className="max-w-screen-sm page-content-padding box-content mx-auto space-y-10">
      <div className="text-center space-y-6">
        {pretitle ? <Typography variant="blockPretitle">{pretitle}</Typography> : null}
        {heading ? (
          <Typography variant="blockTitle" className="">
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
        {items?.map((item) => (
          <AccordionItem key={item._key} value={item._key}>
            <AccordionTrigger className="text-base">{item.trigger}</AccordionTrigger>
            <AccordionContent className="">
              <BlogPortableText value={item.content as PortableTextBlock[]} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default AccordionList
