import React, { useContext } from 'react'
import { NominationContext } from '../Context/NominationContext'
import NominatedMovieItem from './NominatedMovieItem'

const NominationsCard = (props) => {
  const nominations = props.nominations
  const renderNominationsList = () => {
    return [...nominations.keys()].map((nomination) => {
      const movie = nominations.get(nomination)
      return <NominatedMovieItem key={movie.imdbID} movie={movie} />
    })
  }

  return (
    <div>
      <h2>Results</h2>
      {nominations.size && renderNominationsList()}
    </div>
  )
}

export default NominationsCard
