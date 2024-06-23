import React from 'react'
import './Register.scss'
const Register = () => {
  return (
    <>
       <div className="register">
          <form className='form' action="">
             <span>
                <label htmlFor="">UserName</label>
                <input type="text" name="UserName" id="" />
             </span>
             <span>
                <label htmlFor="">password</label>
                <input type="password" name="password" id="" />
             </span>
             <button className='submitbtn'>Submit</button>
          </form>
       </div>
    </>
  )
}

export default Register