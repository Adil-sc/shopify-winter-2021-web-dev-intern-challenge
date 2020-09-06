import React, { useContext } from 'react'
import { NominationContext } from '../Context/NominationContext'
import { removeNominationFromLocalStorage } from '../Utils/localStorage'

export const NominatedMovieItem = (props) => {
  const { nominations, setNominations } = useContext(NominationContext)

  //remove nomination from hashmap
  const removeNominatedMovie = (k) => {
    if (nominations.get(k)) {
      removeNominationFromLocalStorage(k)
      nominations.delete(k)
      setNominations(new Map(nominations))
    }
  }

  return (
    <div className="pl-8 pt-2 flex justify-between">
      <div>
        <li>
          {props.movie.Title} ({props.movie.Year})
        </li>
      </div>

      <div>
        <button
          className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded-full"
          onClick={() => {
            removeNominatedMovie(props.movie.imdbID)
          }}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default NominatedMovieItem
