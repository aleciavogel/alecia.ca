import { type FC } from 'react'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

interface FooterPortableTextProps {
  paragraphClasses?: string
  value: PortableTextBlock[]
}

// Move component definitions outside the main component
const customPortableTextComponents = (paragraphClasses?: string): PortableTextComponents => ({
  block: {
    normal: ({ children }) => <p className={paragraphClasses}>{children}</p>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
})

export const FooterPortableText: FC<FooterPortableTextProps> = ({ paragraphClasses, value }) => {
  // Use the refactored component definitions
  return <PortableText components={customPortableTextComponents(paragraphClasses)} value={value} />
}
