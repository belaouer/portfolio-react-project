import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from 'framer-motion';
import {sliderContainer, slider, pageAnimation, fade, imageAnim, lineAnim} from '../animation';

const OurWork = () => {
    return (
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"/>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={imageAnim} src={athlete} alt="athlete"/>
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h2>The Rcaer</h2>
                <motion.div variants={lineAnim} className="line"/>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line" />
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 1rem;
    background:white;
    h2{
        padding: 1rem 0rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    top: 10%;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    background: #fffebf;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;
export default OurWork
