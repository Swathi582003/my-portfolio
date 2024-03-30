import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react'
import React1 from"../assests/react1.jpg";
import React2 from"../assests/react2.webp";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Mern Stack Developer .I create responsive secure webistes for my cilents</p>
            <Link to="/contact" className="btn">CONTACT</Link>

        </div>
        <div className="right">
        <div className="img-container">
    
    <div className="img-stack top">
        <img src={React1} className="img" alt="HTML"/>
    </div>
    <div className="img-stack bottom">
        <img src={React2} className="img" alt="React"/>
    </div>
</div>

</div>

        </div>
      
    
  )
}

export default AboutContent
