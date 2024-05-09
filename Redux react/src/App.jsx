import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/Store'
import ButtonAppBar from './redux/harry/Nav'
import Nav from './redux/harry/Nav'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
    <Nav/>
    {/* <ButtonAppBar/> */}
    {/* <Provider store={store}>
    <h3>Redux</h3>
      <div>
       
      </div>
    </Provider> */}
    </>
  )
}

export default App
