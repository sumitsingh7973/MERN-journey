import React from 'react'
// import { useState, useEffect } from 'react'
import UserForm from './components/UserForm'

function App  ()  {
  // const[users, setUsers] = useState([]);
  // const[loading, setLoading] = useState(true);
  // const[error, setError] = useState(null);
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response =>{
  //     if(!response.ok){throw new Error("Data load nhi hua")
  //     }
  //   return response.json()
  //   })
  //   .then(data =>{
  //     setUsers(data);
  //     setLoading(false)
  //   });
  // },[])

  // if(loading){
  //   return <h2>loading...</h2>
  // }

  // if(error){
  //   return <h2>error: {error}</h2>
  // }

  // return (
  //   <div>
  //     <h1>user list</h1>
  //     {users.map(user=>( <p key = {user.id}>{user.name}</p>))}
  //   </div>
  // )
  return(
    <div>
      <h1>post</h1>
      <UserForm/>
  </div>
  )
  

}

export default App
