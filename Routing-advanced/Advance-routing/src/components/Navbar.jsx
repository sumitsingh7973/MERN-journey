import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-4 py-4 bg-cyan-800  justify-between'>
      <h2 className='text-2xl font-bold'>Sumit </h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/travel'>Travel</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>

      </div>

    </div>
  )
}

export default Navbar
