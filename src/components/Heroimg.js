import "./HeroimgStyles.css";
import IntoImg from "../assests/intro-bg.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntroImg"/>

      </div>
      <div className="content">
        <p>HI, I'M SWATHI</p>
        <h1>Mern Stack Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>

      </div>
    </div>
  )
}

export default Heroimg
