import React, { useContext, Fragment } from 'react'
import puzzleContext from '../../context/puzzle/puzzleContext'

const Letter = ({ ltr }) => {
  const {
    makeGuess,
    phraseLetters,
    letterGuesses,
    decrementGuesses
  } = useContext(puzzleContext)

  const disableButton = letterGuesses.includes(ltr)

  const onGuess = () => {
    const guess = ltr.toUpperCase()
    const isBadGuess = !phraseLetters.includes(guess)
    if (isBadGuess) {
      makeGuess(guess)
      decrementGuesses()
    }
    makeGuess(guess)
  }

  return (
    <Fragment>
      {!disableButton ? (
        <button style={letterStyle} onClick={onGuess}>
          {ltr}
        </button>
      ) : (
        <button style={letterStyle} onClick={onGuess} disabled>
          {ltr}
        </button>
      )}
    </Fragment>
  )
}

const letterStyle = {
  padding: '1em',
  margin: '0.3em',
  border: 'solid 1px'
}

export default Letter
