import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SampleAssistImage from '../../assets/SampleAssist.png';
import WBPS from '../../assets/WBPS.png';
import SampleAssistLogo from '../../assets/SA_Logo.png';
import BCITLogo from '../../assets/BCIT_Logo.png';
import UOWLogo from '../../assets/UOW_Logo.png';
import { IoLogoReact } from "react-icons/io5";
import { FaAws, FaGithub } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="portfolio">
    <div className="portfolio-container">
        <h1 className="heading">Portfolio</h1>
        <div>
            <h2>Experience</h2><hr/><br/>
            <table className='work-experience'>
                <tr>
                    <th><img src={UOWLogo}/></th>
                    <td>
                        <h3>University of Wollongong</h3>
                        <p>Bachelor of Computer Science</p>
                        <p>2022-2025</p>
                    </td>
                </tr><br/><br/><br/>
                <tr>
                    <th> <img src={SampleAssistLogo}/></th>
                    <td>
                        <h3>Sample Assist</h3>
                        <p>Junior Software Engineer - Internship</p>
                        <p>2/24 - 11/24</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Researched back-end migration strategies for a production medical app transitioning from Firebase to AWS. I later led a team of 4 interns in designing and developing new product prototype, a React-based dashboard that displayed DevOps performance metrics using AWS and GitHub REST APIs. This internship doubled as my major university project, integrating real-world development with academic requirements.</p>
                    </td>
                </tr><br/><br/><br/>
                <tr>
                    <th><img src={BCITLogo}/></th>
                    <td>
                        <h3>BCIT Solutions</h3>
                        <p>Web Developer - Contractor</p>
                        <p>2/25 - current</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>I currently work for BCIT as a website developer and tecnical support, I manage and conduct meetings with potential new clients. Build and maintain websites, and offer technical support</p>
                    </td>
                </tr><br/><br/><br/>
            </table>
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
    </div>
  )
}

export default Portfolio