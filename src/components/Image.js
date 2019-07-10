import React from 'react'
import { Col } from 'react-bootstrap'

const Image = () => {
  return (
    <Col xs={6}>
      <img
        src='https://cdn.pixabay.com/photo/2018/03/16/14/24/ask-3231385_960_720.jpg'
        alt="guess"
        style={{ maxWidth: '500px' }}
      />
    </Col>
  )
}

export default Image
