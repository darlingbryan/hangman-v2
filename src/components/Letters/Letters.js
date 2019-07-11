import React, { useState, useContext } from 'react'
import puzzleContext from '../../context/puzzle/puzzleContext'
import Letter from './Letter'
import { Container, Row } from 'react-bootstrap'

const Letters = () => {
  const {
    makeGuess,
    phraseLetters,
    decrementGuesses,
    letterGuesses
  } = useContext(puzzleContext)

  const [key, setKey] = useState('')
  let guess
  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  const onGuess = () => {
    const isBadGuess = !phraseLetters.includes(guess)
    const isNotUnique = letterGuesses.includes(guess)

    console.log(phraseLetters)
    if (isNotUnique) {
      return
    }

    makeGuess(guess)

    if (isBadGuess) {
      decrementGuesses()
    }
  }

  const handleKeyDown = e => {
    setKey(e.key)
    guess = key.toUpperCase()
    console.log(guess)
  }

  const handleKeyUp = e => {
    setKey(e.key)
    guess = key.toUpperCase()
    console.log(guess)
    onGuess()
  }

  return (
    <Container>
      <Row className='justify-content-md-center'>
        {firstRow.map(letter => (
          <Letter key={letter} ltr={letter} />
        ))}
      </Row>
      <Row className='justify-content-md-center'>
        {secondRow.map(letter => (
          <Letter key={letter} ltr={letter} />
        ))}
      </Row>
      <Row className='justify-content-md-center'>
        {thirdRow.map(letter => (
          <Letter key={letter} ltr={letter} />
        ))}
      </Row>
      <Row className='justify-content-md-center'>
        <div
          style={{ border: '1px solid', padding: '20px', margin: '20px' }}
          tabIndex='0'
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}>
          Click Here to use your Keyboard {key}
        </div>
      </Row>
    </Container>
  )
}

export default Letters
