import React from 'react'

const App = () => {

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("Form-submitted");
  }
  return (
    <div className='h-screen lg:flex  bg-black '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex flex-col Lg:w-1/2 gap-4 p-10 items-start  '>
        

        <input type="text" 
        placeholder='Enter Task Heading'
        className='p-5 w-full border-2 h-5 rounded mb-5 outline-none text-white font-medium '
        />
         
        <textarea
        type="text" 
        placeholder='Enter Details'
        className='px-5 w-full h-30 py-2 flex items-start flex-row border-2 outline-none rounded text-white font-medium'
         />

        <button className='bg-white text-black h-10  rounded mt-5 w-full outline-none'>add note</button>
        {/* <img className="h-60 rounded-full"  src="https://img.freepik.com/premium-vector/note-paper-with-paperclip-white_87744-881.jpg?semt=ais_hybrid&w=740&q=80" alt="" /> */}
      </form>
      <div className='flex flex-wrap lg:w-1/2 p-10 bg-gray-900'>
        <div className='h-32 w-32 rounded-2xl bg-white'></div>
      </div>
    </div>
  )
}

export default App
