import React, { useContext, useState, useEffect } from 'react'
import { NominationContext } from '../Context/NominationContext'
import { addNominationToLocalStorage } from '../Utils/localStorage'
import {
  nominateButtonEnabled,
  nominateButtonDisabled,
} from '../Constants/cssConstants'

export const MovieItem = (props) => {
  const { nominations, setNominations } = useContext(NominationContext)
  const [isNominateButtonDisabled, setIsNominateButtonDisabled] = useState(
    false
  )

  useEffect(() => {
    if (nominations.get(props.movie.imdbID)) {
      setIsNominateButtonDisabled(true)
    } else {
      setIsNominateButtonDisabled(false)
    }
  }, [nominations, props.movie.imdbID])

  const addToNominations = (k, v) => {
    setNominations(new Map(nominations.set(k, v)))
    addNominationToLocalStorage(k, JSON.stringify(v))
    setIsNominateButtonDisabled(true)
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
          className={
            isNominateButtonDisabled
              ? nominateButtonDisabled
              : nominateButtonEnabled
          }
          disabled={isNominateButtonDisabled}
          onClick={() => {
            addToNominations(props.movie.imdbID, props.movie)
          }}
        >
          Nominate
        </button>
      </div>
    </div>
  )
}

export default MovieItem
