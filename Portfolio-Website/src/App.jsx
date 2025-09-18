import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Silk from './Components/Background/Silk'
import GlassButton from './Components/GlassButton/GlassButton'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import ScrollStack, { ScrollStackItem } from './blocks/Components/ScrollStack/ScrollStack'

const App = () => {
  return (
    <div>
      <Portfolio/>  
        
        {/* <Navbar/> */}
        {/* <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        /> */}
      </div>

  )
}

export default App