import React from 'react'

const Letter = ({ ltr }) => {
  const onClick = () => {
    console.log(ltr)
  }
  return (
    <a href='#!' style={letterStyle} onClick={onClick}>
      {ltr}
    </a>
  )
}

const letterStyle = {
  padding: '12px',
  margin: '3px',
  border: 'solid 1px'
}

export default Letter
