import React, { useEffect, useContext } from 'react'
import PuzzleContext from '../context/puzzle/puzzleContext'

const Puzzle = () => {
  const { loadPuzzle, phraseLetters, loading, letterGuesses } = useContext(
    PuzzleContext
  )
  useEffect(() => {
    loadPuzzle()
    //eslint-disable-next-line
  }, [])

  if (loading) {
    return <p>Loading</p>
  }
  console.log(phraseLetters)
  let hashed = ''
  const hashPuzzle = () => {
    phraseLetters.forEach(letter => {
      if (letterGuesses.includes(letter) || letter === ' ') {
        hashed += letter
      } else {
        hashed += '*'
      }
    })
    return hashed
  }
  return <div style={{ margin: '20px 0' }}> {hashPuzzle()} </div>
}

export default Puzzle
