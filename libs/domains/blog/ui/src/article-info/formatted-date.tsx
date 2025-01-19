import { HTMLProps } from 'react'
import { format, parseISO } from 'date-fns'

export const FormattedDate = ({ dateTime, ...props }: HTMLProps<HTMLTimeElement>) => (
  <time dateTime={dateTime} {...props}>
    {format(parseISO(dateTime ?? ''), 'LLLL d, yyyy')}
  </time>
)
