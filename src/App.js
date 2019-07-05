import React from 'react'
import './App.css'

import Puzzle from './components/Puzzle'
import Letters from './components/Letters/Letters'
import GameStatus from './components/GameStatus'

import GameState from './context/game/GameState'
import PuzzleState from './context/puzzle/PuzzleState'

function App() {
  return (
    <GameState>
      <PuzzleState>
        <div className='App' style={{ marginLeft: '20px' }}>
          <h1>HangMan</h1>
          <Puzzle />
          <Letters />
          <GameStatus />
        </div>
      </PuzzleState>
    </GameState>
  )
}

export default App
