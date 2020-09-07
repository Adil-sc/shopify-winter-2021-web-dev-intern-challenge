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
    <div className="pt-2 flex justify-center">
      <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg mb-2 sm:mb-4">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover"
          style={{
            //Can add alt background via second url param: , url(https://image.flaticon.com/icons/svg/49/49238.svg)
            backgroundImage: `url(${props.movie.Poster})`,
            backgroundColor: '#9ae6b4',
          }}
        ></div>

        <div className="pl-4 w-full  bg-white rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
          <div className="mb-4">
            <div
              id="movieTitle"
              className="text-gray-900 font-bold text-xl mb-2"
            >
              {props.movie.Title}
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Release Date: {props.movie.Year}
            </p>

            <div className="flex justify-end mr-4">
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
        </div>
      </div>
    </div>
  )
}

export default MovieItem
