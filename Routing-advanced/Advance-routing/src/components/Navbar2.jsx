import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
     const navigate =useNavigate()
  return (
    <div className='py-1 px-2 bg-cyan-800'>
        <button onClick={()=>{
                navigate('/')
            }}
          className='bg-mauve-700 text-white px-3 py-3 rounded cursor-pointer m-5 active:scale-90 '>Return to home-page</button>
        <button onClick={()=>{
                navigate(-1)
            }}
          className='bg-mauve-700 text-white px-3 py-3 rounded cursor-pointer m-5 active:scale-90 '>Return  Back</button>
        <button onClick={()=>{
                navigate(+1)
            }}
          className='bg-mauve-700 text-white px-3 py-3 rounded cursor-pointer m-5 active:scale-90 '>Next</button>
    </div>
  )
}

export default Navbar2
