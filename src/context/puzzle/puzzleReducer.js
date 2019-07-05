import { LOAD_PUZZLE } from '../types'

export default (state, action) => {
  switch (action.type) {
    default:
    case LOAD_PUZZLE:
      return {
        ...state,
        phraseLetters: action.payload
      }
      return state
  }
}
