import React, { useReducer } from 'react'
import gameReducer from './gameReducer'
import GameContext from './gameContext'
import { SET_GAME_STATUS, ADD_STREAK, RESET_STREAK } from '../types'

const GameState = props => {
  const initialState = {
    playing: true,
    streak: 0
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)
  //Add one to streak
  const addStreak = () => {
    dispatch({
      type: ADD_STREAK
    })
  }
  // Reset streak
  const resetStreak = () => {
    dispatch({
      type: RESET_STREAK
    })
  }

  //Set Game Status
  const setGameStatus = stat => {
    dispatch({
      type: SET_GAME_STATUS,
      payload: stat
    })
  }

  return (
    <GameContext.Provider
      value={{
        playing: state.playing,
        streak: state.streak,
        showNextWord: state.showNextWord,
        addStreak,
        setGameStatus,
        resetStreak
      }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
