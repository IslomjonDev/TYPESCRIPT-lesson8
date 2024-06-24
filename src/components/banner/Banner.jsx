import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'
const Banner = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
            <div className="hero-left">
                <p>Posted on <b>startup</b></p>
                <h1>Step-by-step guide to choosing great font pairs</h1>
                <p>By <span>James West</span>  |  May 23, 2022 </p>
                <p className="hero-p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <Link href={'/about'}>
                <button>Read More </button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner