import { type FC } from 'react'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

import { AnchorTag, Typography } from '@alecia/ui-kit'

interface ExperimentPortableTextProps {
  value: PortableTextBlock[]
}

// Move component definitions outside the main component
const experimentPortableTextComponents = (): PortableTextComponents => ({
  block: {
    normal: ({ children }) => (
      <Typography
        variant="p"
        className="text-sm md:text-base lg:text-base text-body md:leading-relaxed"
      >
        {children}
      </Typography>
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

export const ExperimentPortableText: FC<ExperimentPortableTextProps> = ({ value }) => (
  <PortableText components={experimentPortableTextComponents()} value={value} />
)
