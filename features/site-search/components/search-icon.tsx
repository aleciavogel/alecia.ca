import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'

const SearchIcon: FC = () => {
  return (
    <div className="p-2 translate-x-2">
      <div className="theme-button">
        <FontAwesomeIcon icon={faSearch} className="h-3 -mr-2" />
      </div>
    </div>
  )
}

export default SearchIcon
