import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Home() {
 const id=5;   
const navigate=useNavigate()
function goToAbout(){
    navigate("/about", {state:{id:id}})
}
  return (
    <>
    <div>
      <h1>Home</h1>
    </div>
    <Link to="/about"><button>Go to About</button></Link>
    <Link to="/Contect"><button>Go to contect</button></Link>
    <button onClick={goToAbout}>About</button>
    </>
  )
}

export default Home
