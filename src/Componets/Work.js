import React from 'react';
import './Work.css'; // Ensure to create and link this CSS file

// Example images - replace with your images
import image1 from '../images/film.jpg';
import image2 from '../images/SCRIPT WRITING.jpeg';
import image3 from '../images/d.jpg';

const Work = () => {
  // Array of images and titles for demonstration
  const imageData = [
    { src: image1, title: 'Film & Tv Ad Production' },
    { src: image2, title: 'Script Writing' },
    { src: image3, title: 'Directing' },
    // Add more images and titles as needed
  ];

  return (
    <div className="image-section-container" id='whatwedo'>
         <div className="what-we-do-container">
      <div className="what-we-do-title">
        <span className="line"></span>
        <h2>What We Do</h2>
        <span className="line"></span>
      </div>
      <p className="what-we-do-subtitle">We make Feature and Short Films</p>
    </div>
      {imageData.map((image, index) => (
        <div className="image-overlay-container" key={index}>
          <img src={image.src} alt={image.title} className="background-image" />
          <div className="text-overlay">
            <h2 className='text'>{image.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
