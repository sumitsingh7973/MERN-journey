import React from 'react'

import Card from './components/Card';
import User from './components/User';
const App = () => {

  const arr = [10,20,30,40]
  return (
    <div>
      <div className="parent">
        <User name = {arr[0]}/>
        <User name = "sumit"/>
      </div>
    </div>

  )
}

export default App
