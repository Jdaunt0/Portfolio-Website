import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import './GlassButton.css'

const GlassButton = ({ text = "Add Text", onClick }) => {
  const content = typeof text === 'string' ? 
    text.split(' ').map((word, index) => (
      <span key={index}>{word}</span>
    )) : text;
  
  return (
    <div className="button-container">
      <div className='button'>
        <LiquidGlass
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
