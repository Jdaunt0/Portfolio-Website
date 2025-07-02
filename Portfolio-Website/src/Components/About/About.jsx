import React from 'react'
import profile_img from '../../assets/profile.png'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <img src={profile_img} alt="" />
        <h1>I'm James, A Software Engineer from NSW</h1>
        <p>I have experience in bla bla bal</p>
        <div className="about-action">
            <div className="about-contact">Contact me</div>
            <div className="about-resume">My resume</div>
        </div>
    </div>
  )
}

export default About