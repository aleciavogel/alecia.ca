'use client'

import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'

interface Props {
  hover: boolean
}

const SearchTrigger: FC<Props> = ({ hover }) => {
  const icon = <FontAwesomeIcon icon={faSearch} className="h-3 -mr-2" />

  if (hover) {
    return (
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                role="button"
                className="theme-button pointer-events-auto p-2 translate-x-2"
                aria-label="Search Site"
                id="search-toggle"
                onClick={() => {
                  console.log('Search Trigger Clicked')
                }}
              >
                {icon}
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">Search site</TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
