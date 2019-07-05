import React from 'react'
import './App.css'
import Puzzle from './components/Puzzle'
import Letters from './components/Letters/Letters'
import GameStatus from './components/GameStatus'

function App() {
  return (
    <div className='App' style={{ marginLeft: '20px' }}>
      <h1>HangMan</h1>
      <Puzzle />
      <Letters />
      <GameStatus />
    </div>
  )
}

export default App
