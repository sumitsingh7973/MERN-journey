import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
      <div className='text-[10vw] uppercase leading-[9.5vw] justify-center flex'>The spark for</div>
      <div className='text-[10vw] uppercase leading-[9.5vw] justify-center flex'>
        all
        <div className='h-[7vw] rounded-full overflow-hidden  mt-3 '>
          <Video />
        </div>things
      </div>
      <div className='text-[10vw] uppercase leading-[9.5vw] justify-center flex'>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
