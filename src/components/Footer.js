import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>
                        18,Muruga Nagar,Nethaji Nagar,TherukuKkadu.
                    </p>
                    <p>Attur</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 6369190118</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>swathi582003@gmail.com</h4>
            </div>
            </div>
            <div  className="right">
                <h4>Follow Me On</h4>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
