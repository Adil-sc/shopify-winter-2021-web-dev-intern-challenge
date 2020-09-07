import React from 'react'
import NominatedMovieItem from './NominatedMovieItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const NominationsCard = (props) => {
  const nominations = props.nominations
  const renderNominationsList = () => {
    return [...nominations.keys()].map((nomination) => {
      const movie = nominations.get(nomination)
      return <NominatedMovieItem key={movie.imdbID} movie={movie} />
    })
  }

  const renderEmptyState = () => {
    return (
      <div>
        <p className=" text-gray-500">Your nominated movies appear here</p>
      </div>
    )
  }

  const savedToDeviceIndicator = () => {
    return (
      <p className="text-xs text-gray-500 ml-4 sm:ml-0">
        <span>
          <FontAwesomeIcon icon={faCheck} />{' '}
        </span>
        Saved to device
      </p>
    )
  }

  return (
    <div className="h-auto full bg-white shadow rounded-md p-8 mt-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-2">Nominations</h2>
        {nominations.size > 0 ? savedToDeviceIndicator() : null}
      </div>

      <div id="displayNominations">
        {nominations.size ? renderNominationsList() : renderEmptyState()}
      </div>
    </div>
  )
}

export default NominationsCard
