import React from 'react'

const RightCardContent = (props) => {
  console.log(props.idx);
  
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between cursor-grab'>
          <h2 className='bg-white  text-2xl rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
          <div>
            <p className=' text-white mb-14 text-lg leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quaerat illum provident incidunt excepturi possimus?</p>
            <div className='flex justify-between'>
              <button className='bg-blue-400 text-white font-semibold px-8 py-2 rounded-full cursor-pointer'>{props.tags}</button>
              <button className='bg-blue-400 text-white font-semibold px-4 py-2 rounded-full cursor-pointer'><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightCardContent
