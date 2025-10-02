import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import GlassButton from '../../GlassButton/GlassButton';
import LiquidGlass from 'liquid-glass-react';
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./style.css";
import { portfolio } from './data'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        id="portfolio"
    >
        {portfolio.map((item, i) => (
            <SwiperSlide 
                key={`header-${i}`}
            >
                <div 
                    className="slide-container"
                    onMouseEnter={() => { setHoveredIndex(i); }} 
                    onMouseLeave={(e) => {
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
                    }}
                >
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        style={{
                            filter: hoveredIndex === i ? 'brightness(0.8) contrast(1.1)' : 'none',
                            transition: 'filter 0.3s ease'
                        }}
                    />
                    <div
                        style={{
                            content: '',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(0deg, rgb(0, 0, 0), rgba(255, 255, 255, 0))',
                            opacity: hoveredIndex === i ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none',
                            zIndex: 1
                        }}
                    />
                    {hoveredIndex === i && (
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
                                    cursor: "pointer"
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