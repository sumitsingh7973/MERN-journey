import React from 'react'

const App = () => {
  const age = localStorage.getItem('age')
  const user = localStorage.getItem('user')
  localStorage.removeItem('user')
  console.log(age);
  console.log(user);
  


  return (

    < div >
      <h1 className='text-black'>app</h1>
    </div >
  )
}

export default App
