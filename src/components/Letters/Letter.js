import React, { useContext, Fragment, useState, useEffect } from 'react'
import puzzleContext from '../../context/puzzle/puzzleContext'

const Letter = ({ ltr }) => {
  const { makeGuess, phraseLetters, decrementAttempts } = useContext(
    puzzleContext
  )

  const onGuess = () => {
    const guess = ltr.toUpperCase()
    const isBadGuess = !phraseLetters.includes(guess)

    if (isBadGuess) {
      makeGuess(guess)
      decrementAttempts()
    }
    makeGuess(guess)
  }

  return (
    <Fragment>
      <button style={letterStyle} onClick={onGuess}>
        {ltr}
      </button>
    </Fragment>
  )
}

const letterStyle = {
  padding: '12px',
  margin: '3px',
  border: 'solid 1px'
}

// function useKeyPress(targetKey) {
//   // State for keeping track of whether key is pressed
//   const [keyPressed, setKeyPressed] = useState(false)

//   // If pressed key is our target key then set to true
//   function downHandler({ key }) {
//     if (key === targetKey) {
//       setKeyPressed(true)
//     }
//   }

//   // If released key is our target key then set to false
//   const upHandler = ({ key }) => {
//     if (key === targetKey) {
//       setKeyPressed(false)
//     }
//   }

//   // Add event listeners
//   useEffect(() => {
//     window.addEventListener('keydown', downHandler)
//     window.addEventListener('keyup', upHandler)
//     // Remove event listeners on cleanup
//     return () => {
//       window.removeEventListener('keydown', downHandler)
//       window.removeEventListener('keyup', upHandler)
//     }
//   }, []) // Empty array ensures that effect is only run on mount and unmount

//   return keyPressed
// }

export default Letter
