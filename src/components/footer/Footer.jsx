import React from 'react'
import './Footer.css'
import footer from '../../img/wave.png';
const Footer = () => {
  return (
   <div className="footer">
    <img src={footer} alt="" srcset="" />
    <span>Email: surendra.singh98442@gmail.com </span>
    <span>&copy;Portfolio</span>
   </div>
  )
}

export default Footer;
