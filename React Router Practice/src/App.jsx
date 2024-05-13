// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Contect from './Component/Pages/Contect'
import Navbar1 from './Component/layout/Navbar'
import Sign from './Component/Pages/Sign'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contect' element={<Contect/>}/>
        <Route path='Sign' element={<Sign/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
