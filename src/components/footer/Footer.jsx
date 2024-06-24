import React from 'react'
import { FaFacebook , FaTwitter , FaInstagramSquare , FaLinkedin} from "react-icons/fa";
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
        <div className="footer-content">
            <span>
                <p>Finstreet 118 2561 Fintown</p>
                <p>Hello@finsweet.com  020 7993 2905</p>
            </span>
            <div className="icons">
               <FaFacebook />
               <FaTwitter />
               <FaInstagramSquare />
               <FaLinkedin />
            </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer