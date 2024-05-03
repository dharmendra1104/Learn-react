import { useEffect, useState } from 'react'
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Products } from './component/Product';
import './App.css'

function App() {
  const [data,setData]=useState([]);
  // const [loading,setLoading]=useState(false);

  // const [count, setCount] = useState(0)
  // const [card, setCard]=useState()
  // const fetchdata=async()=>{
  //   let a= await fetch("https://jsonplaceholder.typicode.com/posts")
  //   let data=await a.json()
  //   setCard(data)
  //   console.log(data)
  // }

  async function fetchdata(){
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  // console.log(res.data);
  setData(res.data)
  
}
useEffect(()=>{
  fetchdata()    
},[])

// console.log(data);
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products product={data}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
