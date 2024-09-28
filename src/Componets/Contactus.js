import React, { useState } from 'react';
import './Contact.css';
import img from "../images/background.png";
import emailjs from 'emailjs-com'; // Import EmailJS

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_lomntga', 'template_kmj88an', formData, 'Qtr_OhxsAsGdwL7I7')
            .then((response) => {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (err) => {
                alert('Error sending message');
                console.error('Error:', err);
            });
    };

    return (
        <>
            <nav className='contactform' id='contact' style={{backgroundImage: `url(${img})`}}>
                <div className="container">
                    <div className="content">
                        <div className="right-side">
                            <div className="topic-text">Contact Us</div>
                            <br/>
                            <p style={{color: "white", gap: "10px"}}>
                                <h1 style={{fontSize: "20px"}}>USA BRANCH</h1> 
                                3919 FARGO AVE SKOKIE, IL 60076-3917<br/><br/>
                                <h1 style={{fontSize: "20px"}}>INDIA BRANCH</h1>
                                16-4-79 KHALLA SAHIFA, CHANCHALGUDA, MALAKPET, HYDERABAD 500024, TELANGANA, INDIA.
                            </p>
                            <br/>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-box message-box">
                                    <textarea
                                        name="message"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="contactbutton">
                                    <input
                                        type="submit"
                                        style={{color:"black", width:"65%", height:"75%", fontSize:"15px", padding:"10px"}}
                                        value="Send Now"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Contactus;
