import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import './Navbar.css'
const Navbar = () => {
  return (
    <LiquidGlass
      elasticity={0}
      cornerRadius={25}
      style={{
        position: "fixed",
        top: "5%",
        left: "50%",
        zIndex: 100,
      }}
    >
      <div className="navbar">
        <h1>James Daunt</h1> 
        <ul className="nav-menu">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </LiquidGlass>
  )
}

export default Navbar