import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import Stack from './Components/Portfolio/ScrollStack/stack'
import About from './Components/About/About'
import DarkVeil from './blocks/Backgrounds/DarkVeil/DarkVeil'
import { passiveSupport } from 'passive-events-support/src/utils';

passiveSupport({
  events: 'touchstart',
});

const App = () => {
  return (
  <>
      <Navbar/>
      <About/>
      <Stack/>
      <Contact/>
      <DarkVeil warpAmount={2.7}/>
      {/* <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      /> */}
    </>
  )
}

export default App