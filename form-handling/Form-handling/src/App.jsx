import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black'>
      <form className='flex items-start p-10 justify-between '>
        <div className=' flex gap-4 items-start flex-col w-1/2 '>

          <input type="text" 
        placeholder='Enter Task Heading'
        className='p-5 w-full border-2 h-5 rounded mb-5 text-white '
         />
         
        <input type="text" 
        placeholder='Enter Details'
        className='p-5 w-full border-2 rounded text-white'
         />

        <button className='bg-white text-black h-10  rounded mt-5 w-full'>add note</button></div>
        <img className="h-60 rounded-full"  src="https://img.freepik.com/premium-vector/note-paper-with-paperclip-white_87744-881.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </form>
    </div>
  )
}

export default App
