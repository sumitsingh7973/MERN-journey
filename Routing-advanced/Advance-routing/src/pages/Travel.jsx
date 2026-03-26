import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Travel = () => {
  return (
    <div className='flex justify-center gap-10 py-4'>
      

      <div>
        <Outlet />
      </div>
    </div>

  )
}

export default Travel
