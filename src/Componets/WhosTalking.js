import React from 'react';
import './WhosTalking.css';

import image1 from '../images/m.jpg';
import image2 from '../images/m1.jpg';
import image3 from '../images/main.jpeg';

const WhosTalking = () => {
  // Array of images
  const images = [image1, image2, image3];

  return (
    <div className="whos-talking-container" id="whos-talking">
      <div className="section-title">
        <h1 className="main-title-do">Who's Talking</h1>
        <p className="sub-title-do">
          Submit an article about us! Email: starentertainmentandevent@gmail.com.
        </p>
      </div>

      {/* Grid layout with 3 images in a single row */}
      <div className="grid-container-do">
        {images.slice(0, 3).map((image, index) => (
          <div key={index} className="grid-item-do">
            <img src={image} alt={`Who's talking ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* New Content Section */}
      <div className="company-info-container">
        <h2 className="company-info-title">About Star Entertainment and Events</h2>
        <p className="company-info-description">
          Established in 2014, Star Entertainment and Events has become a leading name in the
          industry, renowned for its exceptional ability to craft unforgettable experiences. Over
          the past decade, we have proudly curated and executed a diverse range of events, from
          dazzling corporate functions to enchanting private celebrations.
        </p>
        <ul className="company-achievements">
          <li>
            Successfully managing over 500 high-profile events, including award ceremonies, product
            launches, and charity galas.
          </li>
          <li>
            Building a network of over 1,000 trusted vendors and partners, ensuring top-notch
            quality and service.
          </li>
          <li>
            Introducing innovative event technologies and trends, keeping our clients ahead of the
            curve.
          </li>
        </ul>
        <p className="company-info-footer">
          At Star Entertainment and Events, we are dedicated to transforming visions into reality
          with creativity, precision, and a commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default WhosTalking;
