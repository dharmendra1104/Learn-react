import React from 'react'
import { useLocation } from 'react-router'

function About() {
    const location=useLocation()
    console.log(location.state.id)
  return (
    <>
    <div>
      <h1>About and id is {location.state.id}</h1>
    </div>
    </>
  )
}

export default About
