import React, { useContext, Fragment, useState, useEffect } from 'react'
import puzzleContext from '../../context/puzzle/puzzleContext'

const Letter = ({ ltr }) => {
  const {
    makeGuess,
    phraseLetters,
    decrementAttempts,
    letterGuesses
  } = useContext(puzzleContext)

  const disableButton = letterGuesses.includes(ltr)

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
  padding: '12px',
  margin: '3px',
  border: 'solid 1px'
}

export default Letter
