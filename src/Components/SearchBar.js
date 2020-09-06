import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
  return (
    <div className="h-auto  bg-white shadow rounded-md">
      <div className="p-4">
        <p className="text-sm pb-1 text-gray-700">Movie Title</p>

        <div className="flex items-center">
          <span className="absolute pl-3 ">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className="shadow appearance-none border px-10 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search movies..."
            onChange={(e) => props.onSearchChange(e.target.value.trim())}
          ></input>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
