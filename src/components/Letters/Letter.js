import React, { useContext } from 'react'
import puzzleContext from '../../context/puzzle/puzzleContext'

const Letter = ({ ltr }) => {
  const {
    makeGuess,
    letterGuesses,
    phraseLetters,
    decrementAttempts
  } = useContext(puzzleContext)
  const onClick = () => {
    const guess = ltr.toUpperCase()
    const isUnique = !letterGuesses.includes(guess)
    const isBadGuess = !phraseLetters.includes(guess)

    if (isUnique) {
      makeGuess(guess)
    }

    if (isBadGuess && isUnique) {
      decrementAttempts()
    }
  }

  return (
    <a href='#!' style={letterStyle} onClick={onClick}>
      {ltr}
    </a>
  )
}

const letterStyle = {
  padding: '12px',
  margin: '3px',
  border: 'solid 1px'
}

export default Letter
