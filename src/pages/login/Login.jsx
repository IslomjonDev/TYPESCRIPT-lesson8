import React, { useEffect, useState } from 'react'
import './Login.scss'
import icon1 from '../../assets/google.webp'
import icon2 from '../../assets/face.png'
import Modul from '../../components/modul/Modul'
// import Register from '../register/Register'
import { usePostSignInMutation } from '../../context/api/ProductsApi'
// import { useGetInputValue } from '../../components/hooks/useInputGetValue'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  useEffect(()=> {
    if(localStorage.getItem('x-auth-token')){
      navigate('/home')
    }
  }
 ,[])
  let navigate = useNavigate()
  
  let [payment , setPayment] = useState(false);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [postSignIN , {data , isLoading , isSuccess , isError}] = usePostSignInMutation()

  if(isSuccess){
    localStorage.setItem("x-auth-token", data.data.token)
    console.log(data);
    toast.success('Successfully logged in!');
    navigate('/home')
  }
  if(isError){
    toast.error('Xato kiritingiz')
  }

  const handleLogin = e => {
    e.preventDefault()
    postSignIN({
      UserName: username, 
      password: password
    })
  }
  const handlepreventLogin = e => {
    e.preventDefault()
  }

  return (
    <>
      <div className="login">
        <div className="container">
          <form onSubmit={handlepreventLogin} action="">
            <h2>Create Account</h2>
            <button onClick={() => setPayment(p => !p)}>Login</button>
            <p>OR</p>
            <button className='register'>Register</button>
            <div className="df">
              <div className="google">
                <img src={icon1} alt="" />
                <p>Login via Google</p>
              </div>
              <div className="google">
                <img src={icon2} alt="" />
                <p>Login via Facebook</p>
              </div>
            </div>
          </form>
          {
            payment && 
            <Modul show={payment} onClose={() => setPayment(false)}>
              <div className="register">
                <form onSubmit={handleLogin} className='form' action="">
                  <span>
                    <label htmlFor="">Username</label> {/* "UserName" o'rniga "username" */}
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" id="" />
                  </span>
                  <span>
                    <label htmlFor="">Password</label> {/* "password" nomi to'g'ri */}
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="" />
                  </span>
                  <button className='submitbtn'>Submit</button>
                </form>
              </div>
            </Modul>
          }
        </div>
      </div>
    </>
  )
}

export default Login
