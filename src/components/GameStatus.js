import React, { useContext } from 'react'
import puzzleContext from '../context/puzzle/puzzleContext'

const GameStatus = () => {
  const { guessesLeft, letterGuesses, phraseLetters, loading } = useContext(
    puzzleContext
  )

  if (loading) {
    return <p>loading</p>
  }

  const puzzleFinished = phraseLetters.every(
    letter => letterGuesses.includes(letter) || letter === ' '
  )

  if (puzzleFinished) {
    console.log('Game finished')
  }

  if (guessesLeft === 0) {
    console.log('Game over')
  }

  return <div style={{ margin: '20px 0' }}>Streak: 4</div>
}

export default GameStatus
