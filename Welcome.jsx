import React from "react";
import Welcome from "./Welcome.css"
import About from "./AboutMe.css";

function AboutMe(){
    return (

    <>
        <div className="parallax">
            <div className="welcomeCard" >
                <span>
                    <h2 className="card-title text-3xl justify-center pt-8 mb-10 text-purple-300 ">Welcome Dear Traveler!</h2>
                </span>
                <div className="message text-purple-100">
                    <p style={{marginBottom: 10}} className="text-lg">If you are here it is because life has brought you to me to assist you on your journey. 
                        I've spent the last 8 years using my abilities to help guide people to lead better, more fulfilled lives.
                    </p>
                </div>
            </div>
            <div className="welcomeCard" >
                <div className="message text-purple-100">
                    <p style={{marginTop: 20}} className="text-lg">
                        I will be using this website as a resource for all of you to learn
                        and spread good energy throughout the world. My goal is to eventually 
                        help as many people as possible and learn as much as I can in this beautiful process.
                        Together we will continue to overcome life's sweetest sorrows. So let me be the first to
                        invite you to a better life!
                    </p>
                </div>
            </div>

        </div>
        </>
    );
}



export default AboutMe;
