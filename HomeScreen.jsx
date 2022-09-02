import React from 'react'
import Waves from "../components/Waves";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome"; 
import Footer from "../components/Footer";
import BottomTabs from "../components/BottomTabs";

function HomeScreen() {
  return (
<>
    <Waves />
    <Welcome />
    <Footer />
    <BottomTabs />
</>
  )
}

export default HomeScreen