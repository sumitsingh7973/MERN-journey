import React from 'react'

const App = () => {
    // async function getData() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     console.log(response);
    // }
    // niche wala arrow function ke through kia h 
    // const getData = async () =>{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     const data = await response.json()
    //     console.log(data);
        
    // }
    return (
        <div>
            <button onClick={getData}>get data</button>
        </div>
    )
}

export default App
