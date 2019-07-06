import { LOAD_PUZZLE, ADD_GUESS, DECREMENT_ATTEMPTS } from '../types'

export default (state, action) => {
  switch (action.type) {
    case LOAD_PUZZLE:
      return {
        ...state,
        phraseLetters: action.payload,
        loading: false
      }
    case ADD_GUESS:
      if (state.letterGuesses.includes(action.payload)) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          letterGuesses: [action.payload, ...state.letterGuesses]
        }
      }
    case DECREMENT_ATTEMPTS:
      return {
        ...state,
        guessesLeft: state.guessesLeft - 1
      }
    default:
      return state
  }
}
