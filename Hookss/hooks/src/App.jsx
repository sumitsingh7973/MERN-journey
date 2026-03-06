import React, { useState } from 'react'

const App = () => {
  const [num , setNum] = useState(10)

  const btnClick =()=>{
    setNum(20)
    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App
