import { HTMLProps } from 'react'
import { format, parseISO } from 'date-fns'

const FormattedDate = ({ dateTime, ...props }: HTMLProps<HTMLTimeElement>) => (
  <time dateTime={dateTime} {...props}>
    {format(parseISO(dateTime ?? ''), 'LLLL d, yyyy')}
  </time>
)

export default FormattedDate
