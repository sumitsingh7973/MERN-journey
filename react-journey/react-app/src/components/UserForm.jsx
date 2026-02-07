import { useState } from "react";

function UserForm(){
    const[name , setName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

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
        console.log("response", data);
    })
    .catch(error =>{
        console.log("Error",error);
    })
    
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default UserForm