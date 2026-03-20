import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <div>
        <h2>This is navbar</h2>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/> }/>
      </Routes>
      </div>
      
    </div>
  )
}

export default App