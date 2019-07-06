import React, { useReducer } from 'react'
import puzzleReducer from './puzzleReducer'
import PuzzleContext from './puzzleContext'
import axios from 'axios'
import { LOAD_PUZZLE, MAKE_GUESS, DECREMENT_ATTEMPTS } from '../types'

const PuzzleState = props => {
  const initialState = {
    phraseLetters: [],
    letterGuesses: [],
    guessesLeft: 5,
    loading: true,
    error: null
  }

  const [state, dispatch] = useReducer(puzzleReducer, initialState)
  //Load Puzzle
  const loadPuzzle = async () => {
    try {
      const res = await axios.get('//puzzle.mead.io/puzzle?wordCount=3')
      const puz = res.data.puzzle.toUpperCase().split('')
      dispatch({
        type: LOAD_PUZZLE,
        payload: puz
      })
    } catch (err) {
      console.log(err)
    }
  }

  //Make Guess
  const makeGuess = guess => {
    dispatch({
      type: MAKE_GUESS,
      payload: guess
    })
  }

  //Decrement Attempts
  const decrementAttempts = () => {
    dispatch({
      type: DECREMENT_ATTEMPTS
    })
  }

  return (
    <PuzzleContext.Provider
      value={{
        phraseLetters: state.phraseLetters,
        letterGuesses: state.letterGuesses,
        guessesLeft: state.guessesLeft,
        loading: state.loading,
        error: state.null,
        loadPuzzle,
        makeGuess,
        decrementAttempts
      }}>
      {props.children}
    </PuzzleContext.Provider>
  )
}

export default PuzzleState
