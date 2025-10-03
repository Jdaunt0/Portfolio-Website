import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import GlassButton from '../../GlassButton/GlassButton';
import LiquidGlass from 'liquid-glass-react';
import { useMediaQuery } from '@mui/material';
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./style.css";
import { portfolio } from './data'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:700px)');

  // Determine which index should show hover effects
  const getDisplayIndex = () => {
    if (isSmallScreen) {
      return activeSlideIndex; // On mobile, show effects for active slide
    }
    return hoveredIndex; // On desktop, show effects for hovered slide
  };

  const displayIndex = getDisplayIndex();

  return (
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
        loop={false}
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        id="portfolio"
    >
        {portfolio.map((item, i) => (
            <SwiperSlide 
                key={`header-${i}`}
            >
                <div 
                    className="slide-container"
                    onMouseEnter={() => { 
                        if (!isSmallScreen) {
                            setHoveredIndex(i); 
                        }
                    }} 
                    onMouseLeave={(e) => {
                        if (!isSmallScreen) {
                            // Don't hide if mouse is going to swiper-related elements
                            const relatedElement = e.relatedTarget;
                            if (relatedElement && (
                                relatedElement.classList?.contains('swiper-wrapper') ||
                                relatedElement.classList?.contains('swiper-slide') ||
                                relatedElement.classList?.contains('swiper-slide-shadow-left') ||
                                relatedElement.classList?.contains('swiper-slide-shadow-right') ||
                                relatedElement.closest('.swiper-wrapper') ||
                                relatedElement.closest('.swiper-slide')
                            )) {
                                return;
                            }
                            
                            setHoveredIndex(null);
                        }
                    }}
                >
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        style={{
                            filter: displayIndex === i ? 'brightness(0.8) contrast(1.1)' : 'none',
                            transition: 'filter 0.3s ease'
                        }}
                    />
                    <div
                        style={{
                            content: '',
                            position: 'absolute',
                            transform: isSmallScreen ? "scale(1.2)" : "scale(1)",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(0deg, rgb(0, 0, 0), rgba(255, 255, 255, 0))',
                            opacity: displayIndex === i ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none',
                            zIndex: 1
                        }}
                    />
                    {displayIndex === i && (
                        <>
                            <LiquidGlass
                                elasticity={0}
                                cornerRadius={500}
                                onClick={() => window.open(item.link, '_blank')}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 100,
                                    display: "flex",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    width: 'fit-content'
                                }}
                            >
                                <h4>See Project →</h4>
                            </LiquidGlass>
                            <div className='descriptor'>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
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