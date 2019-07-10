import React from 'react'
import { Col } from 'react-bootstrap'

const About = () => {
  return (
    <Col>
      <h3> Guess the Phrase v.1</h3>
      <p>
        This is a portfolio project. It is made with React using hooks.
        Bootstrap is used for layout and design. It fetches data from Andrew
        Mead's Hangman API.{' '}
      </p>
      <p>Watch out for version 2.</p>
      <ul>
        <li>keyboard functionality.</li>
        <li>add puzzle categories.</li>
        <li>redesign interface. </li>
        <li>redesign for smaller screen.</li>
      </ul>
    </Col>
  )
}

export default About
