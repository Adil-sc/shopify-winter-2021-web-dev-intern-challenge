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

  console.log(props.searchQuery.movies)

  return (
    <div>
      <h2>{`Results for "${
        props.searchQuery.searchText ? props.searchQuery.searchText : '...'
      }"`}</h2>
      {props.searchQuery.movies && renderResultsList()}
    </div>
  )
}

export default ResultsCard
