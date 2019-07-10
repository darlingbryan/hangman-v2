import React, { useContext, Fragment } from 'react'
import puzzleContext from '../context/puzzle/puzzleContext'
import gameContext from '../context/game/gameContext'
import EndGame from './Modals/EndGame'
import { Col } from 'react-bootstrap'

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
    <Col>
      <div style={{ margin: '20px 0' }}>
        {' '}
        <h4>Guesses Left: {guessesLeft}</h4> <br />
        <h4>Streak: {streak}</h4>
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
    </Col>
  )
}

export default GameStatus
