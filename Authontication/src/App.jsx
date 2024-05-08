import { useState } from 'react'
import './App.css'
import Login from './Component/Login'
import Logout from './Component/Logout'
import Profile from './Component/Profile'
import Navbar from './Component/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Login/>
    <Logout/>
    <Profile/>
      <h1>hell0</h1>
    </>
  )
}

export default App
