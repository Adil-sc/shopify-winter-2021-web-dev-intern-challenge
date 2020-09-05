import React from 'react'

const Banner = (props) => {
  return (
    <div>
      <p>
        {' '}
        {`Congratulations! You've added ${props.numberOfNominations} nominations!`}{' '}
      </p>
    </div>
  )
}

export default Banner
