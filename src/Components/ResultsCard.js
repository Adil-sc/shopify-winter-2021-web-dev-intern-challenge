import React from 'react'
import MovieItem from './MovieItem'

const ResultsCard = (props) => {
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
          Start searching to find your favorite movie
        </p>
      </div>
    )
  }

  console.log(props.searchQuery.movies)

  return (
    <div className="h-auto w-full bg-white shadow rounded-md p-8 mt-6">
      <h2 className="text-lg font-bold">{`Results for "${
        props.searchQuery.searchText ? props.searchQuery.searchText : '...'
      }"`}</h2>
      <div className="">
        {props.searchQuery.movies ? renderResultsList() : renderEmptyState()}
      </div>
      <div>
        {props.searchQuery.movies == null &&
          props.searchQuery.searchText &&
          'No movies found'}
      </div>
    </div>
  )
}

export default ResultsCard
