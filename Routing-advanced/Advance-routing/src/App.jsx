import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Travel from './pages/Travel'
import Notfound from './pages/Notfound'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'
import Explore from './pages/Explore'

const App = () => {
  return (


    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/courses'element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetail/>}/>
        <Route path='/travel' element={<Travel />}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
