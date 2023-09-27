'use client'
import { type FC } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFile } from '@fortawesome/pro-solid-svg-icons'

import { CommandItem } from '@/common/ui/command'

interface SearchLinkProps {
  label: string
  url: string
  icon?: IconProp
  onSelect: (callback: () => unknown) => void
}

const SearchLink: FC<SearchLinkProps> = ({ onSelect: handleSelect, icon = faFile, label, url }) => {
  const router = useRouter()

  return (
    <CommandItem
      value={label}
      onSelect={() => {
        handleSelect(() => {
          router.push(url)
        })
      }}
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span>{label}</span>
    </CommandItem>
  )
}

export default SearchLink
