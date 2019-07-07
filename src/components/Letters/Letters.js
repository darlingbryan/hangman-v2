import React, { useContext, useEffect, Fragment } from 'react'
import Letter from './Letter'
import puzzleContext from '../../context/puzzle/puzzleContext'

const Letters = () => {
  const { makeGuess, phraseLetters, decrementAttempts } = useContext(
    puzzleContext
  )

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  let guess
  const onGuess = () => {
    const isBadGuess = !phraseLetters.includes(guess)

    if (isBadGuess) {
      makeGuess(guess)
      decrementAttempts()
    }
    makeGuess(guess)
  }

  useEffect(() => {
    window.addEventListener('keypress', e => {
      if (e.charCode === 13 || e.charCode === 32) {
        console.log('oops')
        return
      }
      guess = String.fromCharCode(e.charCode).toUpperCase()
      onGuess()
    })
  }, [])

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
