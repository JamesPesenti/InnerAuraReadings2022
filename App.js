import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import "../src/index.css"
import JS from "../src/index.js";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import AstrologyScreen from "./screens/AstrologyScreen"
import Reviews from "./screens/Reviews"
import PricesScreen from "./screens/PricesScreen"
import BottomTabs from "./components/BottomTabs"
import axios from "axios";



// const options = {
//   method: 'POST',
//   url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
//   params: {sign: 'aquarius', day: 'today'},
//   headers: {
//     'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
//     'X-RapidAPI-Key': '0f5d64c116msh1324bf20fdcf339p1e96e3jsna8c61f955d35'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });




function App () {

  return (
    <>
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/astrology" element={<AstrologyScreen />} />
            <Route path="/prices" element={<PricesScreen />} />
          </Routes>
        </main>

        <BottomTabs />
      </div>
  

    </Router>
     </>
  );
  }

export default App;
