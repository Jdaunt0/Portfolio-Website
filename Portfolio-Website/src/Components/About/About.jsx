import React from 'react'
import profile_img from '../../assets/profile.png'
import LiquidGlass from 'liquid-glass-react'
import { IoLogoReact } from "react-icons/io5";
import { DiSwift, DiMysql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaAws, FaPython, FaJava } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { GiElephant } from "react-icons/gi";
import GlassButton from '../GlassButton/GlassButton';
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <div className="about-content">
          <h1>Hi, 👋<br/>I'm James <br/>A software & web developer</h1>
          <p>I have experience in 
            <span className="react"> <IoLogoReact/> React </span>,
            <span className="swift"> <DiSwift/> Swift </span>,
            <span className="sql"> <GrMysql/> SQL </span>,
            <span className="aws"> <FaAws/> </span>,
            <br/>
            <span className="python"> <FaPython/> Python </span>,
            <span className="cplusplus"> <SiCplusplus/> </span>,
            <span className="java"> <FaJava/> Java </span> and
            <span className="php"> <GiElephant className="elephpant"/> PHP </span>.
          </p>
          <div className="about-action">
                <GlassButton text="Contact Me"/>
                <GlassButton text="My Resume"/>
          </div>
        </div>
        <img src={profile_img} alt="" />
      </div>
    </div>
  )
}

export default About