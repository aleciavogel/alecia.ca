import { FC } from 'react'

import { Typography } from '@alecia/ui-kit'

// TODO: dark-mode version

interface AsideListProps {
  heading?: string | null
  listItems?: string[] | null
}

export const AsideList: FC<AsideListProps> = ({ listItems, heading }) => (
  <aside className="">
    <div className="bg-white px-10 py-8 space-y-4">
      {heading ? (
        <Typography variant="blockPretitle" as="h3">
          {heading}
        </Typography>
      ) : null}

      {listItems ? (
        <ul className="space-y-4 list-square list-inside pl-2 text-primary-950">
          {listItems.map((tech, index) => (
            <li key={`aside-${index}`}>{tech}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </aside>
)
