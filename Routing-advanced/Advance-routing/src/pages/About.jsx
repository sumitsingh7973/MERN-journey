import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

     const navigate =useNavigate()
    return (
        <div>
            <button onClick={()=>{
                navigate('/')
            }}
            className='bg-emerald-900 text-white px-5 py-5 rounded cursor-pointer m-5 active:scale-90 '>Return to home-page</button>

            <button onClick={()=>{
                navigate(-1)
            }}
            className='bg-emerald-900 text-white px-5 py-5 rounded cursor-pointer m-5 active:scale-90 '>Return  Back</button>
            <h1>About</h1>
        </div>
    )
}

export default About
