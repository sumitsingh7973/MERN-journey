import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'


const App = () => {


  return (
    <div>
      <Navbar />
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