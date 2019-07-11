import React, { useContext, useEffect } from 'react'
import GameContext from '../../context/game/gameContext'
import PuzzleContext from '../../context/puzzle/puzzleContext'
import { Modal, Button } from 'react-bootstrap'

const NextWord = ({ ...props }) => {
  useEffect(() => {
    addStreak()
    //eslint-disable-next-line
  }, [])
  const { loadPuzzle, phraseLetters } = useContext(PuzzleContext)
  const { addStreak } = useContext(GameContext)
  const onClick = () => {
    loadPuzzle()
  }

  const stringed = phraseLetters.join('')

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header >
        <Modal.Title id='contained-modal-title-vcenter'>Great Job!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{stringed}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Next Word</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NextWord
