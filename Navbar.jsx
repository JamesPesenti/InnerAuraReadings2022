import React from "react";
import Navbar from "./Navbar.css";
import $ from "jquery";



function N(){
    return (

<div>
    {/* <div className="container-fluid"> */}
        <section id="white-section"> 
          {/* <div className="content flex">  */}
          {/* <div className="container"> */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="">
                <img className="inner2" src="pictures/inner.png" alt=""/>
                    {/* <h5>Inner Aura Readings</h5> */}
                    {/* White text  */}
                    {/* style={{color:"white"}} */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/prices">
                                <h6>Prices</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                href="https://www.etsy.com/listing/960177186/one-question-tarot-reading">
                                <h6>Etsy</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Chakras">
                                <h6>Chakras</h6>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#Testimonials">
                                <h6>Testimonials</h6>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/footer">
                                <h6>Contact Info</h6>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* </div> */}
            </nav>
             {/* </div> */}
         </section>
         {/* </div> */}
     </div>
    );
}


export default N;