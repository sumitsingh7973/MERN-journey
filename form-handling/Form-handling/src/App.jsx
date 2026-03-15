import React, { useState } from 'react'
import { X } from 'lucide-react';


const App = () => {
  
  const[title,setTitle]=useState('')
  const[details,setDetails]=useState('')


  const [task,setTask]=useState([])

  const submitHandler =(e)=>{
    e.preventDefault()
    
    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)
    console.log(copyTask);
    

    setTitle("")
    setDetails("")
  }


  return (
    <div className='h-screen lg:flex  bg-black '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex flex-col Lg:w-1/2 gap-4 p-10 items-start  '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input type="text" 
        placeholder='Enter Task Heading'
        className='p-5 w-full border-2 h-5 rounded mb-5 outline-none text-white font-medium '
        value={title}
        onChange={(e)=>{
        setTitle(e.target.value)
          
        }}
        />
         
        <textarea
        type="text" 
        placeholder='Enter Details'
        className='px-5 w-full h-30 py-2 flex items-start flex-row border-2 outline-none rounded text-white font-medium'
        value={details}
        onChange={(e)=>{
        setDetails(e.target.value);
        }}
         />

        <button className='bg-white active:bg-gray-600 text-black h-10  rounded mt-5 w-full outline-none'>add note</button>
        {/* <img className="h-60 rounded-full"  src="https://img.freepik.com/premium-vector/note-paper-with-paperclip-white_87744-881.jpg?semt=ais_hybrid&w=740&q=80" alt="" /> */}
      </form>
      <div className=' lg:w-1/2  p-10 lg:border-l-2 border-white '>
        <h1 className='text-3xl font-bold text-white'>Your notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-full mt-5 overflow-auto text-white'>
          {task.map(function(elem,idx){
            return <div key={idx}className="relative h-60 w-40 py-8 px-4 bg-cover rounded-xl text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <h2> <X /></h2>
              <h3 className='leading-tight text-xl font-semibold '>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
