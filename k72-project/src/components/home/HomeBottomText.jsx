import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex justify-center gap-3 items-center'>
      <div className='border-3 h-44 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] mt-6'to='/Projects'>Projects</Link>
      </div>
      <div className='border-3 h-44 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] mt-6' to= '/Agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
