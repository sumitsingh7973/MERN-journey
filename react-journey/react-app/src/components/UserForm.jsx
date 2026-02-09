import {  useState } from "react";

function UserForm({onAddUser}){
    const[name , setName] = useState('')
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(name.trim() === "") return;
        
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users",
                 {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body : JSON.stringify({name}),
                }
            );

            const data = await res.json();

            onAddUser(data);

            setName("")
               
        } catch (error) {
            console.log("error", error);
            
        }
    }

    return(
        <div>
        <h1></h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
            <button >Submit</button>
        </form>
        </div>
        
    )
}
export default UserForm