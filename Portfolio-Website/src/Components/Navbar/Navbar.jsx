import React, {useState, useEffect} from 'react'
import style from './style.module.scss';
import LiquidGlass from 'liquid-glass-react';
import { motion, useScroll, useTransform} from 'framer-motion'

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [.15, 0.25], [1, 0]);

  return (
    <motion.div style={{ opacity }}>
      <LiquidGlass
          elasticity={0}
          cornerRadius={500}
          className={style.navbarContent}
          style={{
              position: "fixed",
              top: "6rem",
              left: "50%",
              width: "80%",
              maxWidth: "1200px",
              height: "10rem",
              zIndex: 100,
              display: "flex",
              justifyContent: "center",
          }}
      >
          <h1>James Daunt</h1>
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
      </LiquidGlass>
    </motion.div>
  )
}

export default Navbar