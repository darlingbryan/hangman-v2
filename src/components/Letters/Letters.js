import React, { useContext, useEffect, Fragment } from 'react'
import Letter from './Letter'
import puzzleContext from '../../context/puzzle/puzzleContext'
import { Container, Row } from 'react-bootstrap'

const Letters = () => {
  const {
    makeGuess,
    letterGuesses,
    decrementGuesses,
    phraseLetters
  } = useContext(puzzleContext)

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  const alphabet = firstRow.concat(secondRow.concat(thirdRow))
  let guess

  const onGuess = () => {
    console.log(phraseLetters)
    console.log(letterGuesses)
    makeGuess()
    decrementGuesses()
  }

  useEffect(() => {
    window.addEventListener('keypress', e => {
      const ltr = String.fromCharCode(e.charCode).toUpperCase()
      if (alphabet.includes(ltr)) {
        guess = ltr
      }
    })
  }, [phraseLetters, letterGuesses])

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
    </Container>
  )
}

export default Letters
