import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Componentes
import { Register } from './pages/auth/register/Register'
import { Login } from './pages/auth/login/Login'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
