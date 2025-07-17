import React from 'react'
import LiquidGlass from 'liquid-glass-react'

const GlassButton = ({ text = "Add Text" }) => {
  const content = typeof text === 'string' ? 
    text.split(' ').map((word, index) => (
      <span key={index}>{word}</span>
    )) : text;
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'left', 
      alignItems: 'top', 
      paddingLeft: '78px',
      paddingRight: '90px',
      paddingTop: '40px',
    }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <LiquidGlass
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            transform: "none",
          }}
          elasticity={0.05}
          displacementScale={30}
        >
          <div style={{ 
            display: 'flex',
            gap: '8px',
            color: 'white',
            fontWeight: '500',
            fontSize: '16px'
          }}>
            {content}
          </div>
        </LiquidGlass>
      </div>
    </div>
  )
}

export default GlassButton
