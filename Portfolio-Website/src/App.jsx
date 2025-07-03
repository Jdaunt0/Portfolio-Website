import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Silk from './Components/Background/Silk'
import GlassButton from './Components/GlassButton/GlassButton'

const App = () => {
  return (
    <div>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar/>
        <About/>
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <GlassButton text="Contact Me"/>
      <About/>
      <About/>
    </div>
  )
}

export default App