import React from 'react'
import {ArrowUpRight} from 'lucide-react';


const LeftContent = () => {
  return (
    <div className='h-full flex  flex-col justify-between w-1/3 '>
          <div className='p-6'>
            <h3 className='text-5xl font-bold mb-7'>Prospective <br /><span className='text-gray-500 '> customer</span>  <br />Segmentation</h3>
            <p className='text-xl font-medium text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo delectus iure dolore itaque magni numquam deleniti expedita ab quo aut.</p>
          </div>
         <div className="">
        <ArrowUpRight size={44} />
        </div>
    </div>
    
  )
}
//3:47:08

export default LeftContent
