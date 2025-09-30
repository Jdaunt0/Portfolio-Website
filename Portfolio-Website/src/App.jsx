import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Silk from './blocks/Components/Background/Silk'
import Contact from './Components/Contact/Contact'
import Stack from './Components/Portfolio/ScrollStack/stack'
import NewAbout from './Components/AboutNew/NewAbout'
import DarkVeil from './blocks/Backgrounds/DarkVeil/DarkVeil'

const App = () => {
  return (
  <>
      <Navbar/>
      <NewAbout/>
      <Stack/>
      <Contact/>
      <DarkVeil />
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