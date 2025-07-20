import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMenu } from "react-icons/io5";
import './Navbar.css'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <LiquidGlass
      elasticity={0}
      cornerRadius={25}
      style={{
        position: "fixed",
        top: "7%",
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

        <div className="nav-menu-mobile">
          <Button 
            className="mobile-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <IoMenu />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <MenuItem onClick={handleClose}>About Me</MenuItem>
            <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>
        </div>
      </div>
    </LiquidGlass>
  )
}

export default Navbar