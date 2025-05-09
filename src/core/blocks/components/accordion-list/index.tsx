import { PortableTextBlock } from 'next-sanity'

import {
  AccordionContent,
  AccordionItem,
  AccordionRoot as Accordion,
  AccordionTrigger,
} from '@alecia/common/ui/accordion'
import BasicPortableText from '@alecia/common/ui/portable-text/basic-portable-text'
import { Typography } from '@alecia/common/ui/typography'
import { AccordionListBlockType } from '@alecia/core/blocks/types'

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
            <BasicPortableText value={intro as PortableTextBlock[]} changeOnDarkMode />
          </Typography>
        ) : null}
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items?.map((item) => (
          <AccordionItem key={item._key} value={item._key}>
            <AccordionTrigger className="text-base">{item.trigger}</AccordionTrigger>
            <AccordionContent className="">
              <BasicPortableText value={item.content as PortableTextBlock[]} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default AccordionList
