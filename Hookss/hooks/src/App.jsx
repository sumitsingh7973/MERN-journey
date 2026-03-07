import React, { useState } from 'react'

const App = () => {
  const [num , setNum] = useState({user:"sumit-singh", age:21})

  const btnClick =()=>{
    setNum(prev=>({...prev,age:22}))
  }

  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App

//5:40:04
