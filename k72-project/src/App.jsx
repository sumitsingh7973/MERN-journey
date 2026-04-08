import React, { useRef } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import { Route, Routes } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  const stairParentRef = useRef()


  useGSAP(function () {

    const tl = gsap.timeline()
    tl.to('.stairParentRef.current', {
      display: 'block'
    })

    tl.from('.stair', {
      height: 1,

      stagger: {
        amount: -0.25
      }
    })
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.5
      }
    })

    tl.to('.stairParentRef.current', {
      display: 'none'
    })
  })
  return (
    <div>

      <div ref={stairParentRef} className='h-screen w-full   fixed z-20 top-0'>
        <div className='h-full w-full flex  fixed '>

          <div className=' stair h-full w-1/5 bg-black'>
          </div>
          <div className='stair h-full w-1/5 bg-white'>
          </div>
          <div className='stair h-full w-1/5 bg-black'>
          </div>
          <div className='stair h-full w-1/5 bg-white'>
          </div>
          <div className='stair h-full w-1/5 bg-black'>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
// stair animation lgana hia