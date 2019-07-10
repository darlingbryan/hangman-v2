import React from 'react'
import './App.css'

import Puzzle from './components/Puzzle/Puzzle'
import Letters from './components/Letters/Letters'
import GameStatus from './components/GameStatus'
import { Container } from 'react-bootstrap'
import GameState from './context/game/GameState'
import PuzzleState from './context/puzzle/PuzzleState'

function App() {
  return (
    <GameState>
      <PuzzleState>
        <Container className='App' style={{ marginLeft: '20px' }}>
          <h1>Guess That Phrase</h1>
          <Puzzle />
          <Letters />
          <GameStatus />
        </Container>
      </PuzzleState>
    </GameState>
  )
}

export default App
