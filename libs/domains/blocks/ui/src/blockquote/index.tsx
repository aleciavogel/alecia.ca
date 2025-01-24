import { Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface BlockquoteProps {
  author?: string | null
  quote?: string | null
  className?: string
}

const Blockquote = ({ author, quote, className }: BlockquoteProps) => (
  <Typography variant="blockquote" className={cn('space-y-6', className)} as="blockquote">
    <div>{quote}</div>
    {author ? (
      <Typography variant="author" className="text-center" as="div">
        &mdash; {author}
      </Typography>
    ) : null}
  </Typography>
)

export default Blockquote
