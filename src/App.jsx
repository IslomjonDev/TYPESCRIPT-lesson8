import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Auth from './components/auth/Auth'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <Routes>
        <Route path='/' element={<Auth/>}>
          <Route path="home" element={<Home/>} />
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
