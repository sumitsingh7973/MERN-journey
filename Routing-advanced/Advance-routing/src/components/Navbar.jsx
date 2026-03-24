import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-4 py-8 bg-cyan-800  justify-between'>
      <h2 className='text-xl font-bold'>Sumit </h2>
      <div className='flex gap-8'>
        <a className='text-xl font-bold' href="/">Home</a>
        <a className='text-xl font-bold' href="/about">About</a>
        <a className='text-xl font-bold' href="/services">Services</a>
      </div>
    </div>
  )
}

export default Navbar
