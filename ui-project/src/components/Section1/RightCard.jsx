import React from 'react'
import {ArrowRight} from 'lucide-react';
const RightCard = () => {
  return (
    <div  className="h-full overflow-hidden relative w-80 rounded-4xl">
        <img className='h-full w-full object-cover 'src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute top-0 left-0 h-full w-full bg-amber-300 p-8 flex flex-col justify-between'>
          <h2 className='bg-white  text-2xl rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
          <div>
            <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quaerat illum provident incidunt excepturi possimus?</p>
            <div>
              <button className='bg-blue-400 text-white font-semibold px-7 py-3 rounded-full'>Satisfied</button>
              <button><ArrowRight size={20} strokeWidth={1} /></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightCard
