import { SET_GAME_STATUS, ADD_STREAK, RESET_STREAK } from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_GAME_STATUS:
      return {
        ...state,
        playing: action.payload
      }
    case ADD_STREAK:
      return {
        ...state,
        streak: state.streak + 1
      }
    case RESET_STREAK:
      return {
        ...state,
        streak: 0
      }
    default:
      return state
  }
}
