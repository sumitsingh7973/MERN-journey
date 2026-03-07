import React, { useState } from 'react'

const App = () => {
  const [num , setNum] = useState({user:"amit",age:20})

  const btnClick =()=>{
    const newNUM = {...num};
     newNUM.user = "sumit"
    setNum(newNUM)
   
  }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App

//5:40:04
