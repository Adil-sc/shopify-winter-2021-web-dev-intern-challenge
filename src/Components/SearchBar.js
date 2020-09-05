import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies here..."
        onChange={(e) => props.onSearchChange(e.target.value.trim())}
      ></input>
    </div>
  )
}

export default SearchBar
