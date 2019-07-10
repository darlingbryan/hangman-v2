import React, { useContext, Fragment } from 'react'
import PuzzleContext from '../../context/puzzle/puzzleContext'
import PropTypes from 'prop-types'

const LetterBox = ({ ltr }) => {
  const { letterGuesses } = useContext(PuzzleContext)
  const charIsASpace = ltr === ' '
  const charIsNotIncluded = !letterGuesses.includes(ltr)

  const renderLetterBoxes = () => {
    if (charIsASpace) {
      return <div style={boxStyleSpace}> </div>
    }

    if (charIsNotIncluded) {
      return <div style={boxStyle}> </div>
    }

    return <div style={boxStyle}>{ltr}</div>
  }

  return <Fragment>{renderLetterBoxes()}</Fragment>
}

const boxStyle = {
  border: '1px solid',
  margin: '1px',
  padding: '3px'
}
const boxStyleSpace = { margin: '1px', padding: '3px' }

// const letterStyle = { fontSize: '12px' }
LetterBox.propTypes = {
  ltr: PropTypes.string.isRequired
}

export default LetterBox
