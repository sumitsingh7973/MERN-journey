import axios from 'axios'
import Axios from 'axios'
import React, { useState } from 'react'


const App = () => {

  const [userdata, setUserdata] = useState([])

  const getData = async (elem, idx) => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setUserdata(response.data)
  }
  let printUserData = "No User Data"

  if (userdata.length > 0) {
    printUserData = userdata.map(function () {
      return 'hello'
    })
  }
  return (
    <div className='className= bg-gray-500 h-screen'>
      <button
        onClick={getData}
        className='bg-white text-black active:scale-95 p-2 m-10 rounded font-semibold cursor-pointer'>Get Data</button>
      <div >
        {printUserData}
      </div>
    </div >
  )
}

export default App
