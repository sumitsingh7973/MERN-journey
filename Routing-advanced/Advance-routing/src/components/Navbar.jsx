import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-4 py-4 bg-cyan-800  justify-between'>
      <h2 className='text-2xl font-bold'>Sumit </h2>
      <div className='flex gap-10'>
        <a className='text-lg font-medium' href="/">Home</a>
        <a className='text-lg font-medium' href="/about">About</a>
        <a className='text-lg font-medium' href="/products">Products</a>
      </div>
    </div>
  )
}

export default Navbar
