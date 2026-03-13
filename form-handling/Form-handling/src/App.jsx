import React from 'react'

const App = () => {

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("Form-submitted");
  }
  return (
    <div className='h-screen  bg-black'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex items-start p-10 justify-between '>
        <div className=' flex gap-4 items-start flex-col w-1/2 '>

        <input type="text" 
        placeholder='Enter Task Heading'
        className='p-5 w-full border-2 h-5 rounded mb-5 outline-none text-white font-medium '
        />
         
        <textarea
        type="text" 
        placeholder='Enter Details'
        className='px-5 w-full h-30 py-2 flex items-start flex-row border-2 outline-none rounded text-white font-medium'
         />

        <button className='bg-white text-black h-10  rounded mt-5 w-full outline-none'>add note</button></div>
        <img className="h-60 rounded-full"  src="https://img.freepik.com/premium-vector/note-paper-with-paperclip-white_87744-881.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </form>
    </div>
  )
}

export default App
