import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme]= useState('light')
    console.log(setTheme);
    
  return (
    <div>
      <Navbar theme={theme}>
        <h1>this is the navbar</h1>
        <h1>this is the navbar</h1>
      </Navbar>
    </div>
  )
}

export default App
