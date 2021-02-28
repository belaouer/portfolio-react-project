import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
        </div>
    )
}

export default AboutUs
