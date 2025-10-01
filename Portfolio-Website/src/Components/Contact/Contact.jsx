import React from 'react'
import './Contact.css'
import GlassButton from '../GlassButton/GlassButton'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import resume_pdf from '../../assets/JamesDaunt_Resume.pdf';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="heading">Contact</h1>
      <div className="contact-content">
        <h3>E <a href="mailto:Jdaunt0@gmail.com">Jdaunt0@gmail.com</a></h3>
        <h3>P <a href="tel:+61403958752">0403 958 752</a></h3>
        <div className="menu">
          <GlassButton text={<>
            <FaLinkedin 
              className="large-icon" 
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://www.linkedin.com/in/james-daunt/', '_blank');
              }}
              style={{ cursor: 'pointer' }}
            />
            <FaGithub 
              className="large-icon"
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://github.com/Jdaunt0', '_blank');
              }}
              style={{ cursor: 'pointer' }}
            />
            <TbFileCv 
              className="large-icon"
              onClick={(e) => {
                e.stopPropagation();
                window.open(resume_pdf, '_blank');
              }}
              style={{ cursor: 'pointer' }}
            />
          </>}/>
        </div>
      </div>
    </div>
  )
}

export default Contact