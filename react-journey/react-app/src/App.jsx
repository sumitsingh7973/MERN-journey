  import { useState, useEffect } from 'react'
  import Counter from './components/Counter'
  import './App.css'

  function App() {
    const [count , setCount] = useState(0)

    useEffect(()=>{
      console.log("Count change hua");
    },[count])
    return (
      <>
      <h1>app chl ra h </h1>
      <h2> counter {count}</h2>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>
      </>
    )
  }

  export default App
