        import React, { useState } from 'react'

            function AddUser(){
                const [ name , setName] = useState('');

                const handleSubmit = (e) =>{
                    e.preventDefault();
                    
                fetch("https://jsonplaceholder.typicode.com/users",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({
                        name:name,
                    }),
                })
                .then(res => res.json())
                .then(data =>{
                    console.log("User addes",data);
                    setName('')
                    
                })
                    
                }
            
        return (
            <>
            <h2>Add user</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter name' value={name} onChange={(e)=>
                    setName(e.target.value)}/>
                <button type='submit'>add</button>
            </form>
            </>
        )
    }

        export default AddUser
