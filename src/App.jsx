import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Auth from './components/auth/Auth'
import { Route, Routes } from 'react-router-dom'
import SingleRout from './pages/singleRout/SingleRout'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Account from './pages/account/Account'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {
      localStorage.getItem('x-auth-token') ?  <Header/>
      : 
      <></>
     
    }
   
     <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/products/:id" element={<SingleRout/>} />
          <Route path="/account" element={<Account/>} />
        </Route>
      </Routes>
      {
      localStorage.getItem('x-auth-token') ?  <Footer/>
      : 
      <></>
     
    }
   
    </>
  )
}

export default App
