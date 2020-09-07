import React from 'react'
import MovieItem from './MovieItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export const ResultsCard = (props) => {
  const renderResultsList = () => {
    return props.searchQuery.movies.map((movie) => (
      <div key={movie.imdbID}>
        <MovieItem movie={movie} />
      </div>
    ))
  }

  const renderEmptyState = () => {
    return (
      <div>
        <p className=" text-gray-500">
          Start searching to find a movie to nominate
        </p>
      </div>
    )
  }

  const renderAnimation = () => {
    return (
      <div className="animate-ping h-5 w-5">
        <span className="pl-2 ">
          <FontAwesomeIcon icon={faEllipsisH} />
        </span>
      </div>
    )
  }

  const noResultsFound = () => {
    return (
      <div className="text-gray-700 ">
        {props.searchQuery.searchText &&
        props.searchQuery.movies == null &&
        !props.handleLoading.isLoading
          ? 'No movies found. Please try another search'
          : null}
      </div>
    )
  }

  return (
    <div className="h-auto w-full bg-white shadow rounded-md p-8 mt-6 grid col-span-1 sm:mb-4">
      <h2 className="text-2xl font-bold mb-2">{`Results ${
        props.searchQuery.searchText
          ? `for  "${props.searchQuery.searchText}"`
          : ''
      }`}</h2>

      <div id="displayResults" className="">
        {props.searchQuery.movies ? renderResultsList() : renderEmptyState()}
        {props.handleLoading.isLoading ? renderAnimation() : null}
      </div>
      {noResultsFound()}
    </div>
  )
}

export default ResultsCard
