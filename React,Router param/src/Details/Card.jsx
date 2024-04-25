import React from 'react'
import { useNavigate } from "react-router-dom";

function Card({std}) {
    let navigate=useNavigate()
    const handleClick=()=>{
        console.log(std.id);
    navigate(`/${std.id}`)
    }
  return (
   <>
    <article onClick={handleClick} className="">
    <h1>
        {std.title}
    </h1>
    <p>{std.section}</p>
    <b>{std.desc}</b>
  </article>
   </>
  )
}

export default Card
