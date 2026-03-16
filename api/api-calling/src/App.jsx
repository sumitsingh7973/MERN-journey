import React, { useState } from 'react'
import axios from 'axios'

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
    const [ data,setData] = useState([])

    const getData = async () => {

       const response = await axios.get('https://picsum.photos/v2/list')

       setData(response.data)
       
    }
    return (
        <div>
            <button onClick={getData}>get data</button>
            <div></div>
            {data.map(function(elem,idx){
                return <h3>hello{elem.author}</h3>
            })}
        </div>
        
    )
}

export default App
