import React from 'react'
import Chakra from "../components/Chakra"
import Astrology from "../components/Astrology"
import ChakraSlider from "../components/ChakraSlider";
import ZodiacModal from "../components/ZodiacModals.jsx/ZodiacSigns"

import useModal from '../components/ZodiacModals.jsx/ZodiacSigns';

function AstrologyScreen() {
  const {isShowing, toggle} = useModal();
  
  return (
    <>
    <div>
      <div style={{overflow: "hidden"}}>
            <Astrology />
          <header style={{letterSpacing: 2,}} className="text-purple-400 shadow-sm text-3xl pt-20">
            Chakras
              <Chakra />
          </header>
            <ChakraSlider />
      </div>
    </div>
    </>    
  )
}

export default AstrologyScreen