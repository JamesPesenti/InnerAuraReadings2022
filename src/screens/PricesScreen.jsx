import { useState } from 'react'
import PricesSlider from '../components/PricesSlider';
import PricesSlider2 from '../components/PricesSlider2';
import ReviewsSlider from "../components/ReviewsSlider";


function PricesScreen() {
  return (
    <>
       {/* <header className="text-purple-400 shadow-md text-3xl pt-20">
        A few of my reviews
      </header>
      <ReviewsSlider /> */}


      <header className="text-purple-400 shadow-sm text-3xl pt-20">
        Let me guide you to the life you deserve
      </header>
      <PricesSlider /> 

  
  
    </>
  )
}

export default PricesScreen