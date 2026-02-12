import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div className="parent">
    <Card users = "ananya" bio = "i am ananya saini working as a team leader in netsterz" />
    <Card users = "sumanya" bio = " hey there i am sumanya i am not a real person right now but someday i will born as a cute baby"/>
   </div>
   
  )
}

export default App
