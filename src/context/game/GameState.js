import React, { useReducer } from 'react'

import gameReducer from './gameReducer'
import GameContext from './gameContext'

const GameState = props => {
  const initialState = {
    gameStatus: 'new game',
    streak: 0
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

  return (
    <GameContext.Provider
      value={{
        gameStatus: state.gameStatus,
        streak: state.streak
      }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
