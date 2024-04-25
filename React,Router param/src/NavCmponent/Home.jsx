import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { Routes,Route ,Outlet} from 'react-router-dom'
function Home() {
  return (
    <>
  <header>
    <nav>
      <Link to="/">Home</Link>   
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/help">Help</Link>
    </nav>
  </header>
</>
  )
}

export default Home
