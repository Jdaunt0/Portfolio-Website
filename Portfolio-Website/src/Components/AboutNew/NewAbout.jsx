import React from 'react'
import profile_img from '../../assets/profile.png'
import style from './style.module.scss';
import GlassButton from '../GlassButton/GlassButton';

const NewAbout = () => {
  return (
    <div className={style.about}>
        <div>
          <h1>Hi 👋<br/>I'm James, <br/>a software & web developer</h1>
          <div className={style.btn}>
            <GlassButton text="Contact Me"/>
            <GlassButton text="My Resume"/>
          </div>
        </div>
        <img src={profile_img} alt="Profile Image" />
    </div>
  )
}

export default NewAbout