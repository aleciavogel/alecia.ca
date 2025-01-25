import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

import AnchorTag from '@alecia/ui-kit/ui/anchor-tag'
import Typography from '@alecia/ui-kit/ui/typography'

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

const ExperimentPortableText = ({ value }: ExperimentPortableTextProps) => (
  <PortableText components={experimentPortableTextComponents()} value={value} />
)

export default ExperimentPortableText
