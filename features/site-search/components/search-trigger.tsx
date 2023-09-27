'use client'

import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'

import { Tooltip, TooltipTrigger, TooltipContent } from '@/common/ui/tooltip'

interface Props {
  onClick?: () => void
}

const SearchTrigger: FC<Props> = ({ onClick }) => (
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
          <FontAwesomeIcon icon={faSearch} className="h-3 -mr-2" />
        </div>
      </TooltipTrigger>
      <TooltipContent side="left">Search site</TooltipContent>
    </Tooltip>
  </div>
)

export default SearchTrigger
