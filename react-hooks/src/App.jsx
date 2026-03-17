import React, { useEffect, useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    useEffect(function () {
        console.log("useeffect is running")
    }, [num2])
    return (
        <div>
            <h1>value of num is{num}</h1>
            <h2>value of num2 is {num2}</h2>
            <button onClick={() => {
                setNum(num + 1)
            }}>click</button>
            <button onClick={() => {
                setNum2(num2- 1)
            }}>
                decrease
            </button>
        </div>
    )
}

export default App
