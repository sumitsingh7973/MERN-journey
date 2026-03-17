import React, { useEffect, useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(10)

    useEffect(function () {
        console.log("useeffect is running")
    }, [num])
    return (
        <div>
            <h1>{num}</h1>
            <h1>value of num2 is {num2}</h1>
            <button onClick={() => {
            setNum(num + 1) 
            }}>click</button>
        </div>
    )
}

export default App
