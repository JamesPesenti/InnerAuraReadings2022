import React from "react";
import Chakra from "./Chakra.css";
import ScrollAnimation from 'react-animate-on-scroll';
import AOS from "aos";
import "aos/dist/aos.css";





function C(){

    return (
        <>
          <div data-aos="zoom-in"
            style={{
                backgroundImage: "url(https://w0.peakpx.com/wallpaper/531/930/HD-wallpaper-chakra-colors-canvas-vb-abstract-aquamarine-arco-iris-azure-background-blue-chakra-colors-crimson-gradient-green-indigo-orange-painting-purple-rainbow-red-turquoise-yellow.jpg)", 
                backgroundRepeat: "no-repeat", opacity: ".8", resizeMode: "cover", flex: 1, width: "95%", padding: 20, marginLeft: "auto", marginRight: "auto", marginTop: 20, marginBottom: 200,  borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundSize: "100%", height: 500, overflow: "hidden"}}>
        <div 
            className="justify-center bg-[url(https://ih1.redbubble.net/image.1758084674.6324/aps,304x498,small,transparent-pad,600x600,f8f8f8.jpg)]"
            style={{width: "100%", backgroundRepeat: "no-repeat", opacity: "1", resizeMode: "cover", flex: 1, padding: 30, marginTop: 0, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundSize: "100%", height: 325 , overflow: "hidden"}}>

            <p style={{opacity: 1, textAlign: 'center', padding: 20}} className="inline-block tracking-widest rounded-lg text-sm font-bold text-purple-800">
                Chakras are the spiritual energy center within our bodies.
                The 7 Chakras each correspond to specific organs 
                as well as physical/emotional/spiritual states of
                being and influence all areas of your life.
            </p>
        </div>
    </div>


    <div 
            className="justify-center reverse bg-[url(https://w0.peakpx.com/wallpaper/531/930/HD-wallpaper-chakra-colors-canvas-vb-abstract-aquamarine-arco-iris-azure-background-blue-chakra-colors-crimson-gradient-green-indigo-orange-painting-purple-rainbow-red-turquoise-yellow.jpg)]"
            style={{transform: "scaleY(-1)", backgroundRepeat: "no-repeat", opacity: "1", resizeMode: "cover", flex: 1, padding: 30, marginTop: -50, marginBottom: 100, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundSize: "100%", height: 380 , overflow: "hidden"}}>
            <div  style={{transform: "scaleY(-1)"}}>
                <p style={{ letterSpacing: 3, opacity: 1, textAlign: 'center', fontSize: 20}} className="inline-block tracking-widest rounded-lg text-sm font-bold text-purple-700">
                    Blocked Chakras can be healed with energy and a combination of treatments.
                    Healing Chakras will open up the flow of energies to different chakras and will bring balance.
                </p>
                <p style={{ color: "white", letterSpacing: 3, opacity: 1, textAlign: 'center', fontSize: 20}} className="inline-block tracking-widest rounded-lg text-sm font-bold text-purple-700">
                    Below I have a short video that explains opening Chakras and
                    also explore deeper into each Chakra and what
                    they mean to your spiritual well being.
                </p>
            </div>
        </div>

  <div style={{justifyContent: "center", alignItems: "center",}}>
    <iframe  
        style={{marginTop: 0, marginBottom: 0, width: "100%", justifyContent: "center", alignItems: "center", }} width="250" height="345" src="https://www.youtube.com/embed/StrbppmsZJw?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  

</>

    )
}


export default C;
