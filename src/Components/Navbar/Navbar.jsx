import React, {useState, useEffect} from 'react'
import style from './style.module.scss';
import LiquidGlass from 'liquid-glass-react';
import { motion, useScroll, useTransform} from 'framer-motion'
import { useMediaQuery } from '@mui/material';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [.15, 0.25], [1, 0]);
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const isMediumScreen = useMediaQuery('(max-width:1200px)');
  const panelHeight = !isMediumScreen ? "10rem" : (isMobileMenuOpen ? "20rem" : "7rem");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (!isMediumScreen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMediumScreen]);

  return (
    <motion.div style={{ opacity, position:"relative", }}>
      <LiquidGlass
        key={`${isMobileMenuOpen}-${isMediumScreen}`}
          elasticity={0}
          cornerRadius={isSmallScreen ? 60 : 75}
          className={style.navbarContent}
          saturation={200}
          style={{
              position: "fixed",
              top: "6rem",
              left: "50%",
              width: isSmallScreen ? "90%" : "80%",
              maxWidth: "1200px",
              zIndex: 100,
              overflow: "visible",
          }}
      >
        <div className={style.row} style={{marginBottom: isMobileMenuOpen ? "20px" : "0px"}}>
          <h1>James Daunt</h1>
          {!isMediumScreen && (
            <ul>
              <li onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                Experience
              </li>
              <li onClick={() => document.getElementById('liveStats')?.scrollIntoView({ behavior: 'smooth' })}>
                Live Stats
              </li>
              <li onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                Portfolio
              </li>
            </ul>
          )}
          {isMediumScreen && (
            <IoMenu 
              className={style.mobileMenu} 
              onClick={toggleMobileMenu}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
        {isMediumScreen && isMobileMenuOpen && (
          <ul className={`${style.mobileList} ${isMobileMenuOpen ? style.open : ''}`}>
            <li onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
              Experience
            </li>
            <li onClick={() => document.getElementById('liveStats')?.scrollIntoView({ behavior: 'smooth' })}>
              Live Stats
            </li>
            <li onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Portfolio
            </li>
          </ul>  
        )}
      </LiquidGlass>
    </motion.div>
  )
}

export default Navbar