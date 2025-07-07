import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SampleAssistImage from '../../assets/SampleAssist.png';
import WBPS from '../../assets/WBPS.png';


const Portfolio = () => {
  return (
    <div>
        <h1 className="heading">Portfolio:</h1>
        <div className="portfolio-content">
            <h2>Work Experience</h2><hr/><br/>
            <h3>Sample Assist</h3>
            <p>Researched back-end migration strategies for a production medical app transitioning from Firebase to AWS. I later led a team of 4 interns in designing and developing new product prototype, a React-based dashboard that displayed DevOps performance metrics using AWS and GitHub REST APIs. This internship doubled as my major university project, integrating real-world development with academic requirements.</p><br/>
            <h3>BCIT Solutions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui repellendus saepe eaque ducimus eius veniam quaerat quas ut quibusdam cupiditate consequuntur minus, quis in optio deleniti hic quos voluptatem!</p><br/>
            <h2>Projects</h2><hr/><br/>   
        </div>
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
                    <p>React + AWS & Github Rest API</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab veniam tempora minus ipsum molestiae ducimus placeat odio recusandae? Deleniti minus suscipit expedita culpa nisi reiciendis facere. Dignissimos, ipsam sunt!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={WBPS}/>
                    <h1>Website - West Bathurst Preschool</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt adipisci veniam id, impedit necessitatibus dolores modi laboriosam aliquam numquam consequatur quam eius nulla sapiente perspiciatis culpa eaque, eos quisquam non?</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://swiperjs.com/demos/images/nature-4.jpg"}/>
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam quis deleniti dolores facere, eligendi eius recusandae harum, maxime aliquid itaque aut aperiam nesciunt ratione. Vero facilis corporis nostrum minima!</p>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Portfolio