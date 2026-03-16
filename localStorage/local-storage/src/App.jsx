import React from 'react'

const App = () => {
  localStorage.setItem("user", "sumit")
  const user = localStorage.getItem('user')
  const rr = localStorage.removeItem('user')
  console.log(user);

  return (

    < div >
      <h1 className='text-black'>app</h1>
    </div >
  )
}

export default App
