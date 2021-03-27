import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
const About = () => {
    document.title ="Startup - About";
    return (
        <>
       <section className="about-us-conn">
           <div className="in-touch" style={{backgroundImage: 'url(./images/contcat-us-slider.jpg)'}}></div>
       <AboutUs />  
       </section>
        </>
    )
}

export default About;
