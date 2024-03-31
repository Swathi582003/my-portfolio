import React from "react";
import styled from "styled-components";
import backgroundImage from "../assests/b.avif";
import html from "../assests/html5.png";
import cssImage from "../assests/css3.png";
import bootstrap from "../assests/bootstrap.png";
import js from "../assests/js.png";
import json from "../assests/json.png";
import java from "../assests/java.png";
import reactImage from "../assests/react.png";
import "./Skills.css";

import postmanImage from "../assests/postman.png";


import mongodbImage from "../assests/mongodb.png";
import nodejsImage from "../assests/nodejs.png";
import mernImage from "../assests/mern.png";

const Skills = () => {
  const skills = [
    { img: html, title: "HTML" },
    { img: cssImage, title: "CSS" },
    { img: bootstrap, title: "Bootstrap" },
    { img: js, title: "Javascript" },
    { img: json, title: "JSON" },
    { img: java, title: "Java" },
    { img: reactImage, title: "ReactJS" },
    
    { img: postmanImage, title: "Postman" },
    
   
    { img: mongodbImage, title: "MongoDB" },
    { img: nodejsImage, title: "NodeJS" },
    { img: mernImage, title: "MERN" },
  ];

  return (
    <Container id="skills">
      <h1 className="empty">Skills</h1>
      <div className="skillsContainer">
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <img src={skill.img} alt={skill.title} />
            <p>{skill.title}</p>
          </SkillItem>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  background-image: url(${backgroundImage});
  
  h1 {
    color: #01a479;
    text-transform: uppercase;
  }

  .skillsContainer {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
    justify-content: center;
    padding: 30px;
    gap: 20px;
  }
`;

const SkillItem = styled.div`
  background-color: white;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 20px 0px 10px 0px;
  border-radius: 10px;

  &:hover {
    transform: translateY(-15px);
    transition: all 0.4s;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;

export default Skills;
