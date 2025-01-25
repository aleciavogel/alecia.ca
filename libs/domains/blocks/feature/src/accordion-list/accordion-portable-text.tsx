import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

import AnchorTag from '@alecia/ui-kit/ui/anchor-tag'
import Typography from '@alecia/ui-kit/ui/typography'

interface AccordionPortableTextProps {
  value?: PortableTextBlock[]
}

// Move component definitions outside the main component
const accordionPortableTextComponents = (): PortableTextComponents => ({
  block: {
    normal: ({ children }) => (
      <Typography className="text-base text-primary-950 md:leading-relaxed">{children}</Typography>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  marks: {
    link: ({ children, value }) => (
      <AnchorTag href={value.href as string | undefined}>{children}</AnchorTag>
    ),
  },
})

/**
 * Accordion Portable Text component
 * For use with basic text content (no images, code snippets, etc.)
 */
const AccordionPortableText = ({ value = [] }: AccordionPortableTextProps) => (
  <PortableText components={accordionPortableTextComponents()} value={value} />
)

export default AccordionPortableText
