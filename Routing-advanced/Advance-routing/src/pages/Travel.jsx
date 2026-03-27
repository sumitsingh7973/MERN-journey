import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Travel2 from './Travel2'

const Travel = () => {
  return (
    <>
            <div className='border-t border-white flex justify-between'>
                <div className='min-h-150 m-5 max-w-xs'>
                    <h2 className='font-bold font-serif pt-5 text-4xl m-2 active:text-amber-300 cursor-pointer' >Explore Your Dream Destination</h2>  
                </div>

                <div className="bg-cover bg-black/50  w-full m-2 rounded-4xl flex overflow-x-scroll gap-4  no-scrollbar  ">
                    <div className='ml-20 mt-5  h-60 w-50 bg-gray-900 text-white rounded-3xl flex  gap-10 cursor-pointer'>

                        <img className=' rounded-3xl' src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fHww" alt="" 
                        />
                        <button className= 'bg-indigo-600 hover:not-focus:bg-indigo-700  mt-62 ml-8 absolute pt-5 pl-10 pb-5 pr-10 rounded'>Explore</button>
                        <img className='   rounded-3xl' src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW5zfGVufDB8fDB8fHww" alt="" />
                        
                        <button className= 'bg-indigo-600 hover:not-focus:bg-indigo-700  mt-62 ml-8 absolute pt-5 pl-10 pb-5 pr-10 rounded'>Explore</button>

                        <img className='  rounded-3xl' src="https://media.istockphoto.com/id/2234878220/photo/sunset-thunderstorm-reflected-on-deep-lake-flat-tops-wilderness-colorado.webp?a=1&b=1&s=612x612&w=0&k=20&c=pgRKSdDllU_-vaygakVd66XjK8vyvavFbAG1O-0-ls8=" alt="" />
                        

                        <img className='   rounded-3xl' src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />



                    </div>
                </div>
              
            </div>
        </>

  )
}

export default Travel
