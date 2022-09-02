import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AstrologySlider from "./AstrologySlider"
 

function Astrology() {
    return (
    <>
    <div 
        className="bg-[url(https://w0.peakpx.com/wallpaper/220/824/HD-wallpaper-space-star.jpg)]"
        style={{marginLeft: "auto", marginRight: "auto", flex: 1, borderRadius: 40, alignItems: "center", justifyContent: "center", width: "95%", height: 440, overflow: "hidden"}}>
            <div className="w-full h-full pt-50 rounded overflow-hidden shadow-xl justify-center align-">
                <div className=" p-46 py-20 justify-center">
                <div style={{letterSpacing: 3}} className="font-bold text-xl mb-0 text-white shadow-inner">
                    Daily Horoscope
                </div>
                    <div style={{marginTop: 10, letterSpacing: 2}} className="font-bold text-xl mb-0 text-white shadow-inner">Pick your zodiac sign</div>
                        <div className="px-30 justify-center">
                            <div>
                                <AstrologySlider />
                            </div>
                        </div>
                    </div>
                </div>
       
    </div>
    </>
    )
    
    }



    export default Astrology
