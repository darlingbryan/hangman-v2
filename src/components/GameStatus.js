import React, { useContext, Fragment } from 'react'
import puzzleContext from '../context/puzzle/puzzleContext'
import gameContext from '../context/game/gameContext'
import EndGame from './Modals/EndGame'

import NextWord from './Modals/NextWord'

const GameStatus = () => {
  const { guessesLeft, letterGuesses, phraseLetters, loading } = useContext(
    puzzleContext
  )

  const { playing, streak } = useContext(gameContext)

  //Modals
  const puzzleFinished = phraseLetters.every(
    letter => letterGuesses.includes(letter) || letter === ' '
  )

  //Loading
  if (loading) {
    return <p>loading</p>
  }

  if (guessesLeft === 0) {
    console.log('Game over')
  }

  return (
    <Fragment>
      <div style={{ margin: '20px 0' }}>
        {' '}
        <span>Guesses Left: {guessesLeft}</span> <br />
        <span>Streak: {streak}</span>
      </div>
      {puzzleFinished && playing && (
        <Fragment>
          <NextWord show={true} />
        </Fragment>
      )}

      {guessesLeft === 0 && (
        <Fragment>
          <EndGame show={true} />
        </Fragment>
      )}
    </Fragment>
  )
}

export default GameStatus
