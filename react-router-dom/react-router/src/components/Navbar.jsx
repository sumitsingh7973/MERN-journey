import React from 'react'
import {Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-end gap-5 items-center p-5 text-white font-semibold text-lg'>
        <div className='mr-auto text-xl text-black'>
            <Link to="/">Website</Link>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
