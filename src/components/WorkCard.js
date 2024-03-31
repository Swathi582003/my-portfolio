import "./WorkCardStyles.css";
import React from 'react';
import pro1 from "../assests/pro1.png";
import pro2 from "../assests/pro2.png";
import pro3 from "../assests/pro3.png";
import pro4 from "../assests/pro4.png"
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
                <p>Developed expertise in designing and implementing educational tools, including a CGPA calculator that streamlined the process of calculating students' academic performance. 	
                  This involved converting grades into grade points, calculating weighted grade points, and determining CGPA, contributing to improved efficiency and accuracy in academic evaluations..
                </p>
                 <h4>Technology used: HTML,CSS,JS</h4>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
                
            </div>
            
        </div>
        <div className="project-card">
            <img src={pro2} alt="image"/>
            <h2 className="project-title">TODO LIST</h2>
            <div className="pro-details">
                <p>TODO list app built using the MERN stack. This means I used MongoDB, Express.js, React.js, and Node.js to create it. The app has features like letting users sign in, add, edit, and delete tasks, as well as sorting and filtering options. It even updates in real-time, so users always have the latest info. During development, I faced some challenges, but I tackled them successfully.
                </p>
                <h4>Technology used: React js,Node js,Express js,Mongo DB</h4>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
                
            </div>
    </div>
    <div className="project-card">
            <img src={pro3} alt="image"/>
            <h2 className="project-title">PROJECT MANAGEMENT</h2>
            <div className="pro-details">
                <p>I've developed a robust project management application using the MERN stack, combining MongoDB, Express.js, React.js, and Node.js. This comprehensive tool streamlines task delegation, progress monitoring, and resource allocation, empowering teams to collaborate efficiently and achieve project milestones seamlessly.
                </p>
                <h4>Technology used: React js,Node js,Express js,Mongo DB</h4>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
                
            </div>
</div>
<div className="project-card">
            <img src={pro4} alt="image"/>
            <h2 className="project-title">LOGIN AND REGISTER FORM</h2>
            <div className="pro-details">
                <p>The login and registration system I've developed using the MERN stack offers a seamless user experience with robust security features. Through MongoDB, Express.js, React.js, and Node.js, users can easily register by providing basic information like name, email, and password. Passwords are securely encrypted using industry-standard methods, ensuring data protection. 
                </p>
                <h4>Technology used: React js,Node js,Express js,Mongo DB</h4>
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

