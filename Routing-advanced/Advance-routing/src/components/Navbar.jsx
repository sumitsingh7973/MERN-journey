import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-4 py-4 bg-cyan-800  justify-between'>
      <h2 className='text-4xl'>Travel </h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium transition duration-500 hover:scale-125 hover:text-slate-800
         ' to='/'>Home</Link>
        <Link className='text-lg font-medium transition duration-500 hover:scale-125 hover:text-slate-800' to='/travel'>Travel</Link>
        <Link className='text-lg font-medium transition duration-500 hover:scale-125 hover:text-slate-800' to='/courses'>Courses</Link>

      </div>

    </div>
  )
}

export default Navbar
