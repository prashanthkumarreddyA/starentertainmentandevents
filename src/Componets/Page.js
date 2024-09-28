import React from 'react';
import './Page.css'; 
import video from "../images/movie.mp4"; // Ensure the path is correct

const Page = () => {
    return (
        <div className="home-page">
            <video autoPlay muted loop className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                {/* Your content here */}
                <h1>Welcome to
                    <br/>
                     Star Entertainment & Events</h1>
              
            </div>
        </div>
    );
};

export default Page;
