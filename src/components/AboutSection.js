import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../Styles';
import {motion} from 'framer-motion';
import {titleAnim, fade, imageAnim} from '../animation';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span> dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videograpgy ideas that you have. We have professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={imageAnim} src={home1} alt="guy with camera"/>
            </Image>
        </About>
    )
};



export default AboutSection
