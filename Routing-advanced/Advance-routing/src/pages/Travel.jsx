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

        <div className="bg-cover bg-black/50 w-full m-2 rounded-4xl flex overflow-x-scroll gap-6 no-scrollbar p-5">

          {/* Image 1 */}
          <div className="relative min-w-50 h-60 rounded-3xl overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-3xl"
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
              alt=""
            />
            <button className="absolute bottom-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl cursor-pointer">
              Explore
            </button>
          </div>

          {/* Image 2 */}
          <div className="relative min-w-50 h-60 rounded-3xl overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-3xl"
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt=""
            />
            <button className="absolute bottom-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl cursor-pointer">
              Explore
            </button>
          </div>

          {/* Image 3 */}
          <div className="relative min-w-50 h-60 rounded-3xl overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-3xl"
              src="https://images.unsplash.com/photo-1747171232844-4f93b282e4d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"
              alt=""
            />
            <button className="absolute bottom-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl cursor-pointer">
              Explore
            </button>
          </div>

          {/* Image 4 */}
          <div className="relative min-w-50 h-60 rounded-3xl overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-3xl"
              src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e"
              alt=""
            />
            <button className="absolute bottom-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl cursor-pointer">
              Explore
            </button>
          </div>

        </div>

      </div>
    </>

  )
}

export default Travel
