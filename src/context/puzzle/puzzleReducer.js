import { LOAD_PUZZLE, MAKE_GUESS, DECREMENT_GUESSES } from '../types'
export default (state, action) => {
  switch (action.type) {
    case DECREMENT_GUESSES:
      return {
        ...state,
        guessesLeft: state.guessesLeft - 1
      }
    case LOAD_PUZZLE:
      return {
        ...state,
        phraseLetters: action.payload,
        letterGuesses: [],
        guessesLeft: 5,
        showNextWord: true,
        loading: false
      }
    case MAKE_GUESS:
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

    default:
      return state
  }
}
