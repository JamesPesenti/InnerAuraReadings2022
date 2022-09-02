import React from "react";
import Footer from "./Footer.css";
import $ from "jquery";


// var date = new Date().getFullYear();

// $("year").innerHTML = date;



function F(){
    const footerYear = new Date().getFullYear()
    return (

        <>
        <div>

        <section id="footer">
                <div className="container-fluid" id="social">
                    <div className="follow">
                        <h7>Follow Me!</h7>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="l-footer__social-links c-social-links c-social-links--footer">
                            <a className="c-social-links__link"
                                href="https://www.instagram.com/inneraurareadings/?hl=en" target="_blank"><i
                                    className="c-social-links__icon c-social-links__icon--fa-instagram fa fa-instagram"></i></a>
                            <a className="c-social-links__link"
                                href="https://www.etsy.com/listing/960177186/one-question-tarot-readin"
                                target="_blank"><i
                                    className="c-social-links__icon c-social-links__icon--fa-etsy fa fa-etsy"></i></a>
                            <a className="c-social-links__link" href="mailto:pedroguerrateran@gmail.com"
                                target="_blank"><i className="fas fa-envelope-square"></i></a>
                    </div>
                </div>
                
                <div className="copyright">
                    <span id="year">
                         {/* <h7><span id="year"> &copy; 2022 Inner Aura Readings | Chicago, IL</span></h7>  */}
                        <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
                    </span>


                <div className="copyright">
                <span id="year"> <h7><span id="year"> © {footerYear} Inner Aura Readings | Chicago, IL</span></h7> </span>
                </div>
                <br/>
                <br/>
                <br/>
                <h7>Website Created By James Pesenti <i className="fab fa-ethereum"></i></h7> <i
                    className="fas fa-umbrella-beach"></i>
                <br/>
                <br/>
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}


export default F;
