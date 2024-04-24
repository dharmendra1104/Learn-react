// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

// function App() {

//   const list1 = ["ram", "rahul", "rubina", "Dharmendra"]
//   const result = list1.map((item) => <h1>{item}</h1> );

//   return (

//       <div>
//         {list1.map((item)=><h1>{item}</h1>)}  
//         {/*but this way sometime given some error */}
//       </div>
//   );
// }

// function App() {
//   const list1 = ["ram", "rahul", "rubina", "Dharmendra"];
//   const result = list1.map((item) => <h1>{item}</h1> );

//   return (
//     <div>
//       <h1>{result}</h1>
//      {/*but this way sometime given some error */}
//     </div>
//   );
// }

function App() {
  const list1 = ["ram", "rahul", "rubina", "Dharmendra","rahul"];
  const result = list1.map((item,index) => <h1 key={item}>{item} and index is{index}</h1> );

  return (
    <div>
      <h1>{result}</h1>
     {/*here we are also use duplicate vaule with index */}
    </div>
  );
}

export default App
