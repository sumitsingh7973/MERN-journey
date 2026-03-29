import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
     const navigate =useNavigate()
  return (
    <div className='py-1 px-2 bg-cyan-800'>
        <button onClick={()=>{
                navigate('/')
            }}
          className='bg-mauve-700 text-white px-3 py-3 rounded cursor-pointer m-5 active:scale-90 transition duration-300 hover:scale-110 hover:text-gray-800 hover:bg-white'>Return to home-page</button>
        <button onClick={()=>{
                navigate(-1)
            }}
          className='bg-mauve-700 text-white px-3 py-3 rounded cursor-pointer m-5 active:scale-90 transition duration-300 hover:scale-110 hover:text-gray-800 hover:bg-white'>Return  Back</button>
        <button onClick={()=>{
                navigate(+1)
            }}
          className='bg-mauve-700 text-white px-3 py-3 rounded cursor-pointer m-5 active:scale-90 transition duration-300 hover:scale-110 hover:text-gray-800 hover:bg-white '>Next</button>
    </div>
  )
}

export default Navbar2
