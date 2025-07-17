import React from 'react'
import './Contact.css'
import GlassButton from '../GlassButton/GlassButton'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="heading">Contact</h1>
      <p>James Daunt</p>
      <p>E <a href="">Jdaunt0@gmail.com</a></p>
      <p>P <a href="">0403 958 752</a></p>
      <GlassButton text={<><FaLinkedin className="large-icon" />
                           <FaGithub className="large-icon"/>
                           <TbFileCv className="large-icon"/> 
                           </>}/>
    </div>
  )
}

export default Contact