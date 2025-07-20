import React from 'react'
import './Projects.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import SampleAssistImage from '../../../assets/SampleAssist.png';
import WBPS from '../../../assets/WBPS.png';

import { IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="projects">
        <h2>Projects</h2><hr/><br/>
        <div className="projects-content">
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
            >
                <SwiperSlide>
                    <img src={SampleAssistImage}/>
                    <h1>React Dashboard</h1>
                    <p><span className="react"><IoLogoReact/> React</span> + <span className="amazon">AWS</span> & <FaGithub /> GitHub Rest API</p>
                    <p>This project was designed and developed under Sample Assist, I was a developer and project manager for a React-based dashboard that displays DORA and other DevOps performance metrics using AWS and GitHub REST APIs</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://swiperjs.com/demos/images/nature-4.jpg"}/>
                    <h1>This Porfolio website</h1>
                    <p><span className="react"><IoLogoReact/> React</span></p>
                    <p></p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://swiperjs.com/demos/images/nature-4.jpg"}/>
                    <h1>This Porfolio website</h1>
                    <p><span className="react"><IoLogoReact/> React</span></p>
                    <p></p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://swiperjs.com/demos/images/nature-4.jpg"}/>
                    <h1>This Porfolio website</h1>
                    <p><span className="react"><IoLogoReact/> React</span></p>
                    <p></p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={WBPS}/>
                    <h1>Website - West Bathurst Preschool</h1>
                    <p>as a contractor for BCIT, I designed a website for West Bathurst Preschool</p>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src={"https://swiperjs.com/demos/images/nature-4.jpg"}/>
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam quis deleniti dolores facere, eligendi eius recusandae harum, maxime aliquid itaque aut aperiam nesciunt ratione. Vero facilis corporis nostrum minima!</p>
                </SwiperSlide> */}
            </Swiper>
        </div>
    </div>
  )
}

export default Projects