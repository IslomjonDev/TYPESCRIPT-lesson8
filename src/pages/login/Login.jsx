import React, { useState } from 'react'
import './Login.scss'
import icon1 from '../../assets/google.webp'
import icon2 from '../../assets/face.png'
import Modul from '../../components/modul/Modul'
import Register from '../register/Register'
import { usePostSignIn } from '../../context/api/ProductsApi'
import { useGetInputValue } from '../../components/hooks/useInputGetValue'


const initalState = {
  UserName : "" ,
  password : ""
}

const Login = () => {
  
  let [payment , setPayment] = useState(false);

   const {postSignIN} = usePostSignIn()

   const {formData , handleChange} = useGetInputValue(initalState)
   
  const handleLogin = async e => {
    e.preventDefault()
    try{
      const res = await postSignIN(formData)
      console.log(res);
    }catch (err){
      console.error('Failed to login', err);
    }

  }

  return (
    <>
    <div className="login">
       <div className="container">
        <form onSubmit={handleLogin} action="">
            <h2>Create Account</h2>
             <button  onClick={() => setPayment(p => !p)}>Login</button>
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
                    <Register/>
                  </Modul>
            }
       </div>
    </div>
    </>
  )
}

export default Login