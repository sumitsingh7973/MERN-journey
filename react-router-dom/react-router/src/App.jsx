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
        <div className='min-h-150 m-5 max-w-xs'>
          <h2 className='font-bold font-serif pt-5 text-4xl' >This is Website Which i've Created</h2>
          <p className='text-gray-200 leading-10 font-serif text-lg mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repudiandae rerum? Rerum nihil nam, quisquam dignissimos fuga quasi tempore obcaecati omnis. Aperiam possimus placeat sequi?</p>
        </div>
        <div className="bg-cover bg-black/50  w-full m-2 rounded-4xl flex   ">
          <div className='m-20  h-80 w-50 bg-gray-900 text-white rounded-3xl flex  gap-10'>

            <img className=' h-full w-full rounded-3xl' src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <img className=' h-full w-full rounded-3xl' src="https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <img className=' h-full w-full rounded-3xl' src="https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <img className=' h-full w-full rounded-3xl' src="https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <img className=' h-full w-full rounded-3xl' src="https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <img className=' h-full w-full rounded-3xl' src="https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <img className=' h-full w-full rounded-3xl' src="https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
          </div>
        </div>
      </div>
      <div>footer</div>
    </div>
  )
}

export default App