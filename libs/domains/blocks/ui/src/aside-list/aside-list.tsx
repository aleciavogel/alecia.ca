import { FC } from 'react'

import { Typography } from '@alecia/ui-kit'

interface AsideListProps {
  heading?: string | null
  listItems?: string[] | null
  className?: string
}

export const AsideList = ({ listItems, heading, className }: AsideListProps) => (
  <aside className={className}>
    <div className="bg-white dark:bg-transparent border border-transparent dark:border-primary-300 px-4 md:px-10 py-4 md:py-8 space-y-4">
      {heading ? (
        <Typography variant="blockPretitle" as="h3">
          {heading}
        </Typography>
      ) : null}

      {listItems ? (
        <ul className="space-y-2 text-sm md:text-base md:space-y-4 list-square list-inside pl-2 text-primary-900 dark:text-primary-300">
          {listItems.map((tech, index) => (
            <li key={`aside-${index}`}>{tech}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </aside>
)
