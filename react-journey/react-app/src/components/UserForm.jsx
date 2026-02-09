import {  useState } from "react";

function UserForm(){
    const[name , setName] = useState('')
    const[user , setUser] = useState(null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(name.trim() === "") return;

    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            name:name,
        }),
    })
    .then(response => response.json())
    .then(data =>{
        setUser(data)
    })
    .catch(error =>{
        console.log("Error",error);
    })
    
    }

    return(
        <div>
        <h1></h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Submit</button>
            {user && <p>user added:{user.name}</p>}
        </form>
        </div>
        
    )
}
export default UserForm