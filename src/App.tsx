import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Products from './pages/Products'
import { useState } from 'react'

function App() {
  const navigation = useNavigate()
  const [idx, setIdx] = useState(0)
  function onChangeIdx(arg: number){
    navigation('/')
    setIdx(arg)
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home linkClick={onChangeIdx} link={idx}/>}/>
        <Route path='/products' element={<Products linkClick={onChangeIdx}/>}/>
        <Route path='/appointment' element={<Appointment linkClick={onChangeIdx}/>}/>
      </Routes>
    </>
  )
}

export default App
