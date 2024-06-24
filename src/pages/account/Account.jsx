import React from 'react'
import './Account.scss'
import CreateProduct from '../../components/createProducts/CreateProduct'

const Account = () => {
  return (
    <div className='account'>
        <div className="container"> 
            <h2>Account</h2>
            <CreateProduct/>
        </div>
    </div>
  )
}

export default Account