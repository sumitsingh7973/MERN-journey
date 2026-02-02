import { useEffect,useState } from "react";

function App (){
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>{
      setUsers(data)
    })
  },[])

  return(
    <>
    <h1>Users list</h1>
    {users.map((user)=>(
      <p key={user.id}>{user.name}</p>
    ))}
    </>
  )
} 

export default App