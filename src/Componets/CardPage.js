import React from 'react';
import './CardPage.css'; // Ensure the CSS file is correctly imported

import image1 from '../images/Director.jpeg';
import image2 from '../images/Actor1.jpeg';
import image3 from '../images/Actor2.jpeg';
import image4 from '../images/Actor3.jpeg';
import image5 from '../images/Actros.jpeg';
import image6 from '../images/Actor6.jpeg';
import image7 from '../images/Actor7.jpeg';
import image8 from '../images/Actor8.jpeg';

import profileImage from "../images/CEO.jpeg";

// Array of images with titles and descriptions
const images = [
  { image: image1, title: "Abid Khan", description: "Director" },
  { image: image2, title: "Arshan Khan", description: "Actor" },
  { image: image3, title: "Feroz Khan", description: "Actor" },
  { image: image4, title: "Aziz Naser", description: "Actor" },
  { image: image5, title: "Aleeza Khan", description: "Actress" },
  { image: image6, title: "Raj Kumar Das", description: "Actor" },
  { image: image7, title: "Vindya Tiwari", description: "Actress" },
  { image: image8, title: "Pooja", description: "Actress" },
  ];

const CardPage = () => {
  return (
    <div id='who-we-are' className="card-page">
       <div className="who-we-are-title">
        <span className="line"></span>
        <h1>Who We Are</h1>
        <span className="line"></span>
      </div>
    
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-content">
          <h2 className="profile-name">Hussain Khan</h2>
          <p className="profile-description" style={{ textAlign: 'center', fontWeight: 'bold' }}>
            CEO
          </p>
        </div>

     
     

      {/* Card Grid */}
      <div className="card-grid">
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
