'use client'

import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'

import { Tooltip, TooltipTrigger, TooltipContent } from '@/common/ui/tooltip'

interface Props {
  hover: boolean
  onClick?: () => void
}

const SearchTrigger: FC<Props> = ({ hover, onClick }) => {
  const icon = <FontAwesomeIcon icon={faSearch} className="h-3 -mr-2" />

  if (hover) {
    return (
      <div>
        <Tooltip>
          <TooltipTrigger>
            <div
              role="button"
              className="theme-button pointer-events-auto p-2 translate-x-2"
              aria-label="Search Site"
              id="search-toggle"
              onClick={() => {
                onClick?.()
              }}
            >
              {icon}
            </div>
          </TooltipTrigger>
          <TooltipContent side="left">Search site</TooltipContent>
        </Tooltip>
      </div>
    )
  }

  return (
    <div className="p-2 translate-x-2">
      <div className="theme-button">{icon}</div>
    </div>
  )
}

export default SearchTrigger
