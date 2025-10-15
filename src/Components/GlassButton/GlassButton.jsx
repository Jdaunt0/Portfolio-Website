import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import { useMediaQuery } from '@mui/material';
import './GlassButton.css'

const GlassButton = ({ text = "Add Text", onClick }) => {
  const content = typeof text === 'string' ? 
    text.split(' ').map((word, index) => (
      <span key={index}>{word}</span>
    )) : text;
  
  const isMediumScreen = useMediaQuery('(max-width:700px)');
  
  return (
    <div className="button-container">
      <div className='button'>
        <LiquidGlass
          padding={isMediumScreen ? "15px 20px" : "25px 30px"}
          onClick={onClick}
          style={{
            cursor: "pointer",
            position: "absolute", 
            top: "0",
            left: "0",
            transform: "none",
          }}
          elasticity={0.05}
          displacementScale={30}
        >
          <div className='button-content'>
              {content}
          </div>
        </LiquidGlass>
      </div>
    </div>
  )
}

export default GlassButton
