import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSlider from "../components/AboutSlider"
import ReviewsSlider from "../components/ReviewsSlider"

AOS.init(); {
    AOS.init({
      duration : 100
    });
  }



function AboutScreen() {
  return (
<>
  <div style={{overflow: "hidden",}}>
      <AboutSlider />
      <ReviewsSlider />
  </div>
</>
  )
}

export default AboutScreen