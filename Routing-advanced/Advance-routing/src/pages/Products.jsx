import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex justify-center gap-10 py-4'>
      <Link to='/products/men'>Men</Link>
      <Link to='/products/women'>Women</Link>

    <div>
      <Outlet/>
    </div>
    </div>
    
  )
}

export default Products
