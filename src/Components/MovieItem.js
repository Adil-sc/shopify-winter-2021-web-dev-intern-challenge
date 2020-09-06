import React, { useContext, useState, useEffect } from 'react'
import { NominationContext } from '../Context/NominationContext'
import { addNominationToLocalStorage } from '../Utils/localStorage'
import {
  nominateButtonEnabled,
  nominateButtonDisabled,
} from '../Constants/cssConstants'

export const MovieItem = (props) => {
  const { nominations, setNominations } = useContext(NominationContext)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  //Disable/enable Nominate button based on if the moive has been nominated
  useEffect(() => {
    if (nominations.get(props.movie.imdbID)) {
      setIsButtonDisabled(true)
    } else {
      setIsButtonDisabled(false)
    }
  }, [nominations, props.movie.imdbID])

  //Add movie to nominations hashmap
  const updateNominations = (k, v) => {
    setNominations(new Map(nominations.set(k, v)))
    addNominationToLocalStorage(k, JSON.stringify(v))
    setIsButtonDisabled(true)
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
            isButtonDisabled ? nominateButtonDisabled : nominateButtonEnabled
          }
          disabled={isButtonDisabled}
          onClick={() => {
            updateNominations(props.movie.imdbID, props.movie)
          }}
        >
          Nominate
        </button>
      </div>
    </div>
  )
}

export default MovieItem
