import React from 'react'

const App = () => {
  function change(val){
    console.log(val);
    
  }

  return (
    <div>
      <h1>hello</h1>
      <input onChange={function(elem){
        change(elem.target.value)
      }} type="text"/>
    </div>
  )
}
export default App
