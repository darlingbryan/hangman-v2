import React, { useEffect, useContext } from 'react'
import PuzzleContext from '../../context/puzzle/puzzleContext'
import LetterBox from './LetterBox'

const Puzzle = () => {
  const { loadPuzzle, phraseLetters, loading } = useContext(PuzzleContext)
  useEffect(() => {
    loadPuzzle()
    //eslint-disable-next-line
  }, [])

  if (loading) {
    return <p>Loading</p>
  }

  const showLetters = phraseLetters.map(letter => {
    return <LetterBox ltr={letter} />
  })

  return (
    <div className='flex-container' style={{ margin: '20px 0' }}>
      <div style={{ margin: '1px', padding: '3px' }}> > </div>
      {showLetters}
    </div>
  )
}

export default Puzzle
