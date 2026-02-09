import { useEffect , useState } from "react";
import Userform from "./components/UserForm";

function App (){
  const [ users , setUsers] = useState([]);

  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(data => setUsers(data))
  },[])

  const addUsers = (newUsers) =>{
    setUsers(prevUsers => [...prevUsers, newUsers]);
  };

  return(
    <div>
      <h2>Users list</h2>

    <Userform onAddUser = {addUsers}/>

    {users.map(user =>{
      <p key={user.id}>{user.name}</p>
    })}

    </div>
  )

}

export default App