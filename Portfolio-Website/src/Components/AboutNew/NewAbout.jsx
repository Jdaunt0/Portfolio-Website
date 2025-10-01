import React from 'react'
import profile_img from '../../assets/profile.png'
import resume_pdf from '../../assets/JamesDaunt_Resume.pdf'
import style from './style.module.scss';
import GlassButton from '../GlassButton/GlassButton';

const NewAbout = () => {
  return (
    <div className={style.about}>
        <div>
          <h1>Hi 👋<br/>I'm James, <br/>a software & web developer</h1>
          <div className={style.btn}>
            <GlassButton 
              text="Contact Me" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <GlassButton 
              text="My Resume" 
              onClick={() => window.open(resume_pdf, '_blank')}
            />
          </div>
        </div>
        <img src={profile_img} alt="Profile Image" />
    </div>
  )
}

export default NewAbout