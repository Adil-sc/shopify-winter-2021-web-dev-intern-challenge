import React, { useContext, useState, useEffect } from 'react'
import { NominationContext } from '../Context/NominationContext'

const MovieItem = (props) => {
  const { nominations, setNominations } = useContext(NominationContext)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  useEffect(() => {
    if (nominations.get(props.movie.imdbID)) {
      console.log('>>', nominations)
      setIsButtonDisabled(true)
    } else {
      setIsButtonDisabled(false)
    }
  }, [nominations])

  const updateNominations = (k, v) => {
    setNominations(new Map(nominations.set(k, v)))
    setIsButtonDisabled(true)
  }

  return (
    <div>
      <li>
        {props.movie.Title} ({props.movie.Year})
      </li>
      <button
        disabled={isButtonDisabled}
        onClick={() => {
          updateNominations(props.movie.imdbID, props.movie)
        }}
      >
        Nominate
      </button>
    </div>
  )
}

export default MovieItem
