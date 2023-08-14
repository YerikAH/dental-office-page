import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Products from './pages/Products'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
