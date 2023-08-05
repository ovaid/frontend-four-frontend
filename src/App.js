import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Componenet/Home.js'
import About from './Componenet/About.js'
import NavBar from './Componenet/NavBar.js'
import './index.css'
const App = () => {
  return (

    <>
        <div className='navbar'>
          <NavBar/>
        </div>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboute' element={<About/>}></Route>
    </Routes> 
    </>
    
  )
}

export default App ;