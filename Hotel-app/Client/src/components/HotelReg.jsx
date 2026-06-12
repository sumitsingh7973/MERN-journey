import React from 'react'
import { assets, cities } from '../assets/assets'


const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 zoom-100 flex items-center justify-center bg-black/65'>
      <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        <img className='w-1/2 rounded-bl-xl rounded-tl-xl hidden md:block' src={assets.regImage} alt="reg-img" />

        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
          <img className='absolute top-4 right-4 h-4 w-4 cursor-pointer ' src={assets.closeIcon} alt="close-Icon" />
          <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>
        {/* hotek-name */}

          <div className='w-full mt-4'>
            <label htmlFor="name" className='font-medium text-gray-700'>Hotel Name</label>
            <input id='name' type="text" placeholder='Type here' className='border border-gray-500 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light placeholder:text-gray-500' required/>
          </div>

          <div className='w-full mt-4'>
            <label htmlFor="Contact" className='font-medium text-gray-700'>Phone</label>
            <input id='contact' type="tel" placeholder='Type here' className='border border-gray-500 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light placeholder:text-gray-500' required/>
          </div>

          {/* address */}
          <div className='w-full mt-4'>
            <label htmlFor="Address" className='font-medium text-gray-700'>Address</label>
            <input id='Address' type="text" placeholder='Type here' className='border border-gray-500 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light placeholder:text-gray-500' required/>
          </div>
          {/* Select city Drop Down*/}
          <div className='w-full mt-4 max-w-60 mr-auto'>
            <label htmlFor="city" className='font-medium text-gray-500'>
              City
            </label>
            <select id="city" className='border border-gray-600 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required >
              <option value="">Select City</option>
              {cities.map((city)=>(
                <option key={city} value={city}>city</option>
              ))}
            </select>
            <button className=' px-4 py-1.5 rounded-xl mt-5 items-center justify-center border border-gray-400 cursor-pointer bg-indigo-500 text-white'>Register</button>
          </div>
        </div>

      </form>
    </div>
  )

}

export default HotelReg
