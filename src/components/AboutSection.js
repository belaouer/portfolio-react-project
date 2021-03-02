import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../Styles';
import {motion} from 'framer-motion';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2>We work to make </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span> dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videograpgy ideas that you have. We have professionals with amazing skills</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with camera"/>
            </Image>
        </About>
    )
};



export default AboutSection
