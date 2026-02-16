import React from 'react'

import Card from './components/Card';
import User from './components/User';
const App = () => {

  const arr = [10,20,30,40]
  return (
    <div>
      <div className="parent">
        {arr.map(function(naam){
          console.log(naam);
          
          return naam*2
        })}
      </div>
    </div>

  )
}

export default App
