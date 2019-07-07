import React, { useContext, useEffect, Fragment } from 'react'
import Letter from './Letter'
import puzzleContext from '../../context/puzzle/puzzleContext'

let alphabet

const Letters = () => {
  const {
    makeGuess,
    phraseLetters,
    decrementAttempts,
    letterGuesses
  } = useContext(puzzleContext)

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  alphabet = firstRow.concat(secondRow.concat(thirdRow))

  let guess
  const onGuess = () => {
    const unique = !letterGuesses.includes(guess)

    if (unique) {
      makeGuess(guess)
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', e => {
      const res = String.fromCharCode(e.charCode).toUpperCase()
      guess = res
      {
        alphabet.includes(res) && onGuess()
      }
    })
  }, [letterGuesses])

  return (
    <Fragment>
      <div>
        {firstRow.map(letter => (
          <Letter key={letter} ltr={letter} />
        ))}
      </div>
      <div>
        {secondRow.map(letter => (
          <Letter key={letter} ltr={letter} />
        ))}
      </div>
      <div>
        {thirdRow.map(letter => (
          <Letter key={letter} ltr={letter} />
        ))}
      </div>
    </Fragment>
  )
}

export default Letters
