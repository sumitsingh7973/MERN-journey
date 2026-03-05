import React from 'react'

const App = () => {
  

  return (
    <div>
      <h1>hello</h1>
      <input onChange={function(elem){
        console.log(elem.target.value);

      }} type="text"/>
    </div>
  )
}
export default App
