import React from 'react';
import './Projects.css';
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
import image6 from "../images/image6.jpeg";
import image7 from "../images/image7.jpeg";
import image8 from "../images/image8.jpeg";
import image9 from "../images/image9.jpeg";
import image10 from "../images/image10.jpeg";
import image11 from "../images/image11.jpeg";
import image12 from "../images/image12.jpeg";
import image13 from "../images/Movie1.jpeg";
import image14 from "../images/Movie2.jpeg";
import image15 from "../images/Movie3.jpeg";

const Projects = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-title">
        <span className="line"></span>
        <h1>Projects and Events</h1>
        <span className="line"></span>
      </div>
      <div className="grid-container">
        {images.map((image, index) => (
          <div key={index} className="grid-item">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
