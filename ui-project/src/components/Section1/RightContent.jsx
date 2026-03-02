import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
     <div className='overflow-x-auto rounded-4xl flex flex-nowrap gap-2 py-10 px-4 m-8  h-full w-2/3 '>
      <RightCard/>
      <RightCard/>
      <RightCard/>
     </div>
  )
}

export default RightContent
