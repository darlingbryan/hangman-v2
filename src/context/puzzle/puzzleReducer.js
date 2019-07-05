import { LOAD_PUZZLE, MAKE_GUESS, DECREMENT_ATTEMPTS } from '../types'

export default (state, action) => {
  switch (action.type) {
    case LOAD_PUZZLE:
      return {
        ...state,
        phraseLetters: action.payload,
        loading: false
      }
    case MAKE_GUESS:
      return {
        ...state,
        letterGuesses: [action.payload, ...state.letterGuesses]
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
