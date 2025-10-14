import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import LiquidGlass from 'liquid-glass-react';
import { useMediaQuery } from '@mui/material';
import { portfolio } from './data.jsx'

import "./style.css";

const Projects = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const isMediumScreen = useMediaQuery('(max-width:700px)');
  const isSmallScreen = useMediaQuery('(max-width:430px)');
  
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={0}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        id="portfolio"
    >
        {portfolio.map((item, i) => (
            <SwiperSlide key={`header-${i}`} >
                <div className="slide-container">
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        style={{
                            filter: activeSlideIndex === i ? 'brightness(0.8) contrast(1.1)' : 'none',
                            transition: 'filter 0.3s ease'
                        }}
                    />
                    <div style={{ 
                            content: '',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(0deg, rgb(0, 0, 0), rgba(255, 255, 255, 0))',
                            opacity: activeSlideIndex === i ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none',
                            zIndex: 1,
                        }}
                    />
                    {activeSlideIndex === i && (
                        <>
                            <LiquidGlass
                                elasticity={0}
                                cornerRadius={500}
                                padding={isMediumScreen ? "10px 15px" : "15px 20px"}
                                onClick={() => window.open(item.link, '_blank')}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    display: "flex",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    pointerEvents: 'auto',
                                    zIndex: 2,
                                }}
                            >
                                <h4>See Project →</h4>
                            </LiquidGlass>
                            <div className='descriptor'>
                                <h3>{item.title}</h3>
                                <h5>{item.description}</h5>
                            </div>
                        </>
                    )}
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Projects