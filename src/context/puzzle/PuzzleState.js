import React, { useReducer } from 'react'
import puzzleReducer from './puzzleReducer'
import PuzzleContext from './puzzleContext'
import axios from 'axios'
import { LOAD_PUZZLE, MAKE_GUESS, DECREMENT_GUESSES } from '../types'

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

  //Add Guess
  const makeGuess = guess => {
    dispatch({
      type: MAKE_GUESS,
      payload: guess
    })
  }

  //Decrement Guesses
  const decrementGuesses = () => {
    dispatch({
      type: DECREMENT_GUESSES
    })
  }

  return (
    <PuzzleContext.Provider
      value={{
        phraseLetters: state.phraseLetters,
        letterGuesses: state.letterGuesses,
        loading: state.loading,
        error: state.null,
        loadPuzzle,
        makeGuess,
        decrementGuesses,
        guessesLeft: state.guessesLeft
      }}>
      {props.children}
    </PuzzleContext.Provider>
  )
}

export default PuzzleState
