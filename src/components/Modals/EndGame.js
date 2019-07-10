import React, { useContext } from 'react'
import GameContext from '../../context/game/gameContext'
import PuzzleContext from '../../context/puzzle/puzzleContext'
import { Modal, Button } from 'react-bootstrap'

const EndGame = ({ ...props }) => {
  const { loadPuzzle, phraseLetters } = useContext(PuzzleContext)
  const { resetStreak, streak } = useContext(GameContext)
  const onClick = () => {
    loadPuzzle()
    resetStreak()
  }
  const stringed = phraseLetters.join('')

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Too Bad!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>The word is </p>

        <h4>{stringed}</h4>

        {streak === 0 ? (
          <p>You didn't made it pass the first puzzle!</p>
        ) : (
          <p>You made it to {streak} in a row.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Play Again</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EndGame
