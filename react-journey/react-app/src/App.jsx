  import { useState } from 'react'
  import Counter from './components/Counter';
  import './App.css'

  function App() {
    const [count, setCount] = useState(0)

    function addValue(){
      setCount(prev => prev +1)
    }

    function decreaseValue(){
      setCount(prev =>{
          if(prev>0){
            return prev - 1
        }
      })
    }

    function fromStart(){
      setCount(0)
      
    }

    return (
      <>
        <h3>Counter app</h3>
        <Counter
          count = {count}
          onIncrease = {addValue}
          onDecrease = { decreaseValue}
          Reset = {fromStart}
        />
      </>
    )
  }

  export default App
