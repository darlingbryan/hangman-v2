import React from 'react'
import './App.css'

import Puzzle from './components/Puzzle/Puzzle'
import Letters from './components/Letters/Letters'
import GameStatus from './components/GameStatus'
import Image from './components/Image'
import About from './components/About'
import { Container, Row } from 'react-bootstrap'
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
          <Row>
            <GameStatus />
            <Image />
            <About />
          </Row>
        </Container>
      </PuzzleState>
    </GameState>
  )
}

export default App
