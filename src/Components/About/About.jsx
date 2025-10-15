import React from 'react'
import profile_img from '../../assets/profile.png'
import resume_pdf from '../../assets/JamesDaunt_Resume.pdf'
import style from './style.module.scss';
import GlassButton from '../GlassButton/GlassButton';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';
import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent';
import { useMediaQuery } from '@mui/material';
const About = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const text = isSmallScreen ? <>Hi I'm James, <br/>a software & web developer</> : <>Hi 👋<br/>I'm James, <br/>a software & web developer</>;
  return (
    <div className={style.about}>
        <div>
          <SplitText
            key={isSmallScreen ? 'mobile' : 'desktop'} // Force re-mount on media change
            text={text}
            className="text-2xl font-semibold text-center"
            tag="h1"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign={isSmallScreen ? "center" : "left"}
          />
          <AnimatedContent
           delay={2}
          >
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
          </AnimatedContent>
        </div>
        <img src={profile_img} alt="Profile Image" />
    </div>
  )
}

export default About