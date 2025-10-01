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
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        id="portfolio"
    >
        {portfolio.map((item, i) => (
            <SwiperSlide 
                key={`header-${i}`} 
                onMouseEnter={() => setHoveredIndex(i)} 
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <img src={item.img} alt={item.title} />
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
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Projects