import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div className='bg-gray-600 h-screen'>
      <div className='flex justify-end gap-5 items-center p-5 text-white font-semibold text-lg'>
        <h1>Home</h1>
        <h1>Contact</h1>
        <h1>About Us</h1>
      </div>

      <div className='border-t border-white flex justify-between'>
        <div className='min-h-150 min-w-140 m-2 '>
          <h2 className='font-bold font-serif pt-5' >This is Website Which i've Created</h2>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repudiandae rerum? Rerum nihil nam, quisquam dignissimos fuga quasi tempore obcaecati omnis. Aperiam possimus placeat sequi?</p>
        </div>
        <div className='bg-black w-full m-2 '></div>
      </div>
      <div>footer</div>
    </div>
  )
}

export default App