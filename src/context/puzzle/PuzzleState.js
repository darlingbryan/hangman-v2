import React, { useReducer } from 'react'
import puzzleReducer from './puzzleReducer'
import PuzzleContext from './puzzleContext'
import axios from 'axios'
import { LOAD_PUZZLE } from '../types'

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
      const res = await axios.get('/puzzles/1')

      const data = res.data.phrase.toUpperCase().split('')
      console.log(data)
      dispatch({
        type: LOAD_PUZZLE,
        payload: data
      })
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
        error: state.null,
        loadPuzzle
      }}>
      {props.children}
    </PuzzleContext.Provider>
  )
}

export default PuzzleState
