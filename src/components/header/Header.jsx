import React from 'react'
import './Header.scss'
import logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
         <div className="navbar">
            <div className="navlogo">
              <NavLink to={'/home'}>
                <img src={logo} alt='logo' />
              </NavLink>
            </div>
            <div className="nav-list">
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
                <NavLink to={'/account'}>
                 <button>Account</button>
                </NavLink>
            </div>
         </div>
        </div>
      </header>
    </>
  )
}

export default Header