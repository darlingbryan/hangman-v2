import React, { useReducer } from 'react'
import puzzleReducer from './puzzleReducer'
import PuzzleContext from './puzzleContext'
import Axios from 'axios'

const PuzzleState = props => {
  const initialState = {
    phraseLetters: [],
    letterGuesses: [],
    guessesLeft: 5,
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(puzzleReducer, initialState)
  //Load Puzzle
  const loadPuzzle = async () => {
    try {
      const res = await Axios.get('/puzzles/1')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PuzzleContext.Provider
      value={{
        phraseLetters: state.phraseLetters,
        letterGuesses: state.letterGuesses,
        guessesLeft: state.guessesLeft,
        loading: state.loading,
        error: state.null
      }}>
      {props.children}
    </PuzzleContext.Provider>
  )
}

export default PuzzleState
