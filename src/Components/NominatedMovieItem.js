import React, { useContext } from 'react'
import { NominationContext } from '../Context/NominationContext'
import { removeNominationFromLocalStorage } from '../Utils/localStorage'

export const NominatedMovieItem = (props) => {
  const { nominations, setNominations } = useContext(NominationContext)

  const removeNominatedMovie = (k) => {
    if (nominations.get(k)) {
      removeNominationFromLocalStorage(k)
      nominations.delete(k)
      setNominations(new Map(nominations))
    }
  }

  return (
    <div className="pt-2 flex justify-center">
      <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg mb-2">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover"
          style={{
            backgroundImage: `url(${props.movie.Poster})`,
            backgroundColor: '#9ae6b4',
          }}
        ></div>

        <div className="pl-4 w-full  bg-white rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
          <div className="mb-4">
            <div
              id="nominatedMovieTitle"
              className="text-gray-900 font-bold text-xl mb-2"
            >
              {props.movie.Title}
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Release Date: {props.movie.Year}
            </p>

            <div className="flex justify-end mr-4">
              <button
                className="ml-4 bg-red-500 hover:bg-red-700 \
              text-white font-bold  px-4 rounded-full focus:outline-none"
                onClick={() => {
                  removeNominatedMovie(props.movie.imdbID)
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NominatedMovieItem
