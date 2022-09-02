import React from 'react'
import ZodiacModal from "../components/ZodiacModals.jsx/ZodiacSigns"
import useModal from '../components/ZodiacModals.jsx/useModal';


function AstrologySlider() {
    const {isShowing, toggle} = useModal();


  return (
    <>
         <div className="w-100 h-100 carousel rounded">
            <div className="carousel-item">
                <div className="container pt-20 pb-20 ">
                <ZodiacModal />
                </div>
             </div> 
        </div>
    </>
  )
}

export default AstrologySlider
