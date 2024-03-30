import "./WorkCardStyles.css";
import React from 'react';
import pro1 from "../assests/project1.png"
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">
        Projects
      </h1>
      <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">CGPA Calculator</h2>
            <div className="pro-details">
                <p>Developed expertise in designing and implementing educational tools, including a CGPA calculator that streamlined the process of calculating students' academic performance. 	This involved converting grades into grade points, calculating weighted grade points, and determining CGPA, contributing to improved efficiency and accuracy in academic evaluations..
                </p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
                
            </div>
            
        </div>
        <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">CGPA Calculator</h2>
            <div className="pro-details">
                <p>Developed expertise in designing and implementing educational tools, including a CGPA calculator that streamlined the process of calculating students' academic performance. 	This involved converting grades into grade points, calculating weighted grade points, and determining CGPA, contributing to improved efficiency and accuracy in academic evaluations..
                </p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
                
            </div>
    </div>
    <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">CGPA Calculator</h2>
            <div className="pro-details">
                <p>Developed expertise in designing and implementing educational tools, including a CGPA calculator that streamlined the process of calculating students' academic performance. 	This involved converting grades into grade points, calculating weighted grade points, and determining CGPA, contributing to improved efficiency and accuracy in academic evaluations..
                </p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
                
            </div>
</div>
</div>
</div>
  )
};

export default WorkCard

