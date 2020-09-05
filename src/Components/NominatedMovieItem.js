import React, { useContext, useState } from 'react'
import { NominationContext } from '../Context/NominationContext'

const NominatedMovieItem = (props) => {
  const { nominations, setNominations } = useContext(NominationContext)

  const removeNominatedMovie = (k) => {
    if (nominations.get(k)) {
      nominations.delete(k)
      setNominations(new Map(nominations))
    }
  }

  return (
    <div>
      <li>
        {props.movie.Title} ({props.movie.Year})
      </li>
      <button
        onClick={() => {
          removeNominatedMovie(props.movie.imdbID)
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default NominatedMovieItem
