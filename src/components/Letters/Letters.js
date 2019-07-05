import React from 'react'
import Letter from './Letter'

const Letters = () => {
  const letterGroup = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'l',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]

  return (
    <div>
      {letterGroup.map(letter => (
        <Letter key={letter} ltr={letter} />
      ))}
    </div>
  )
}

export default Letters
