import React from 'react'
import './Portfolio.css'

import Experience from './Experience/Experience.jsx';
import Projects from './Projects/Projects.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import SampleAssistImage from '../../assets/SampleAssist.png';
import WBPS from '../../assets/WBPS.png';

import { IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="portfolio-container">
            <h1 className="heading">Portfolio</h1>
            <Experience />
            <Projects />
        </div>
    </div>
  )
}

export default Portfolio