import React, { useContext, useEffect } from 'react'
import Letter from './Letter'
import puzzleContext from '../../context/puzzle/puzzleContext'

const Letters = () => {
  const { makeGuess, phraseLetters, decrementAttempts } = useContext(
    puzzleContext
  )

  const letterGroup = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]

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
      guess = String.fromCharCode(e.charCode)
      onGuess()
    })
  }, [])

  return (
    <div>
      {letterGroup.map(letter => (
        <Letter key={letter} ltr={letter} />
      ))}
    </div>
  )
}

export default Letters
