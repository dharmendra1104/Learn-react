import React from 'react'
import { data } from '../data'
import Card from './Card'

function AllCard() {
  return (
    <>
    <div>
            {data.map((item) => {
        return <Card key={item.id} std={item} />
      })}
    </div>
    {/* <App/> */}
    </>
  )
}

export default AllCard
