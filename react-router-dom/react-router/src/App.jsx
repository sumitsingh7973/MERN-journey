import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-600 h-screen'>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App