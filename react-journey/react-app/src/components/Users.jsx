import { useState, useEffect} from "react";

function Users(){
    const [ users , setUsers] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.join())
        .then(data => setUsers(data))
    },[])
    return(
        <>
        <h2>Users</h2>
        {users.map(user =>(
            <p key={user.id}>{user.name}</p>
        ))}
        </>
    )
}

export default Users