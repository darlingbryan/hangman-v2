import React, { useContext } from 'react'
import GameContext from '../../context/game/gameContext'
import PuzzleContext from '../../context/puzzle/puzzleContext'
import { Modal, Button } from 'react-bootstrap'

const NextWord = ({ ...props }) => {
  const { loadPuzzle, phraseLetters } = useContext(PuzzleContext)
  const { addStreak } = useContext(GameContext)
  const onClick = () => {
    loadPuzzle()
    addStreak()
  }

  const stringed = phraseLetters.join('')

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Great Job!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 />
        <h3>{stringed}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Next Word</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NextWord
