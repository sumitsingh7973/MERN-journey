import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center-safe justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
      <Link>
      <img src={assets.logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Navbar
