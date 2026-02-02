import React, { useEffect } from 'react'

function App  ()  {

  useEffect(()=>{
    console.log("api call start");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then( response => response.json())
      .then(data =>{
        console.log("API", data);
      })    
      .catch(error =>{
        console.log("error",error);
      })

  },[])

  return (
    <h1>
      day2 -API call console check krna h
    </h1>
  )
}

export default App
