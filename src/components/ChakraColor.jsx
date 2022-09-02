import React from "react";
import ChakraColor from "./ChakraColor.css";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';


$(window).scroll(function() {

    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
 
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
     
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();





function ChakraC(){
    return (

        <div>

        <div className="panel" data-color="white">
        </div>
       
        <div data-aos="fade-in" data-color="red" className="panel">
            <i className="fas fa-balance-scale"></i>
            <h1 className="underline">ROOT</h1>
            <p>
                <h7>Located in the base of spine</h7>
            </p>
            <p>
                <h7>When the Root Chakra is balanced & functioning properly you feel secure, grounded, and at peace with
                    the world</h7>
                </p>
            <p>
                <h7>A blocked Root can lead to feelings of fear, nervousness, and restlessness.</h7>
            </p>
        </div>
        <div>
        <div className="panel" data-color="orange" >
            <i className="far fa-sun"></i>
            <h1 className="underline">SACRAL</h1>
            <p>
                <h7>In the lower abdomen just below the navel</h7>
            </p>
            <p>
                <h7>It's primary function is pleasure & overall enjoyment of life</h7>
            </p>
            <p>
                <h7>If the Sacral is not alligned - symptoms could be sexual disfunction, lack of creativity, and
                    chronic lower back pain</h7>
            </p>
            </div>
        </div>
        <div>
        <div className="panel" data-color="yellow">
            <i className="fas fa-align-center"></i>
            <h1 className="underline">SOLAR PLEXUS</h1>
            <p>
                <h7 className="text-muted">In the upper belly at the diaphragm</h7>
            </p>
            <p>
                <h7 className="text-muted">It is the center of personal power</h7>
            </p>
            <p>
                <h7 className="text-muted">A blockage could be causing low self-esteem/indecisiveness/and anger or control
                    issues.</h7>
            </p>
            </div>
        </div>
        <div>
        <div className="panel" data-color="green">
            <i className="far fa-heart"></i>
            <h1 className="underline">HEART</h1>
            <p>
                <h7>Center of the chest</h7>
            </p>
            <p>
                <h7>When your heart chakra is balanced & alligned, love & compassion flow freely </h7>
            </p>
            <p>
                <h7>A blocked Heart can lead to</h7>
            </p>
            <p>
                <h7>jealousy, fear of betrayal, grief, anger, and hatred toward yourself and others.</h7>
            </p>
            </div>
        </div>
        <div>
        <div  className="panel" data-color="blue">
            <i className="far fa-comments"></i>
            <h1 className="underline">THROAT</h1>
            <p>
                <h7>Located near the thyroid, neck, mouth, and tongue</h7>
            </p>
            <p>
                <h7>The first of the 3 solely spiritual chakras</h7>
            </p>
            <p>
                <h7>Known in Sanskrit as Vishuddha, the throat chakra rules all communication</h7>
            </p>
            <p>
                <h7>An underactive Throat could cause you to not be able to fully express yourself clearly to others,
                    affecting your relationships.</h7>
            </p>
            </div>
        </div>
        <div>
        <div  className="panel" data-color="indigo">
            <i className="fas fa-eye"></i>
            <h1 className="underline">THIRD EYE</h1>
            <p>
                <h7>Associated with the pituitary gland and lower part of the brain</h7>
            </p>
            <p>
                <h7>Serves as a bridge between your physical and spiritual self</h7>
            </p>
            <p>
                <h7>A blocked Third Eye will affect your ability to trust your intuition, recall important facts as well
                    as make you act more dismissive and judgmental.</h7>
            </p>
            </div>
        </div>
        <div>
        <div  className="panel" data-color="violet">

            <i className="fas fa-crown"></i>
     
            <h1 className="underline">CROWN</h1>
            <p>
                <h7>Located in the crown of the head</h7>
            </p>
            <p>
                <h7>Known in Sanskrit as Sahasrara </h7>
            </p>
            <p>
                <h7>It is the center of our spiritual connection to our higher selves and center of enlightenment</h7>
            </p>
            <p>
                <h7>A Blocked Crown can make you feel disconnected and energetically numb</h7>
            </p>
            <p>
                <h7>These feelings can result in a lack of purpose in life or direction, making you feel lost.</h7>
            </p>
            </div>
        </div>
        <div className="panel" data-color="white">
        </div>
        </div>
    );
}




export default ChakraC;
