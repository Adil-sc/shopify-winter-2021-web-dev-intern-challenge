import React, { useState } from 'react'
import Confetti from 'react-confetti'

export const Banner = (props) => {
  const [confettiIsFalling, setConfettiIsFalling] = useState(true)

  setTimeout(() => {
    setConfettiIsFalling(false)
  }, 5000)

  return (
    <div className="">
      <div className="h-14 bg-green-300 shadow rounded-md text-center">
        <p className="text-lg font-bold p-2">
          {`🎉 Congratulations! You've completed adding ${props.numberOfNominations} nominations! 🎉`}
        </p>

        {confettiIsFalling && <Confetti numberOfPieces={200} />}
      </div>
    </div>
  )
}

export default Banner
