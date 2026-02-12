import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div className="parent">
    <Card users = "ananya" bio = "i am ananya saini working as a team leader in netsterz" button ="ok" img ="https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    <Card users = "sumanya" bio = " hey there i am sumanya i am not a real person right now but someday i will born as a cute baby" button="hehehe" img ="https://images.unsplash.com/photo-1770296877116-c4973c84d339?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    
    <Card users = "Sumit" bio = " hey there i am sumit singh i am doing all this to build my future " button="yes" img ="https://images.unsplash.com/photo-1770754288999-c545fc028b18?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   </div>
   
  )
}

export default App
