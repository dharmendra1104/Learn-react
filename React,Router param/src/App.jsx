// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react'
import { Routes,Route ,Outlet} from 'react-router-dom'
import Home from './NavCmponent/Home'
import Service from './NavCmponent/Service'
import About from './NavCmponent/About'
import Help from './NavCmponent/Help'
import AllCard from './Details/AllCard'
import UniqueDetail from './Details/UniqueDetail'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Help' element={<Help/>}/>
      
      <Route path='/' element={<AllCard/>}/>
      <Route path='/:id' element={<UniqueDetail/>}/>

    </Routes>
    <AllCard/>

    </>
  )
}

export default App
