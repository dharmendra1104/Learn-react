import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import Contect from './Component/Contect'
import About from './Component/About'
// import './App.css'

function App() {

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<div>I am home page</div>}/>
      <Route path='/contact' element={<div>I am contact page</div>}/>
      <Route path='/About' element={<div>I am about page</div>}/>
    </Routes> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contect' element={<Contect/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>


    </>
  )
}

export default App
