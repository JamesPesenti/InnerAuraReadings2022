import React from 'react'

function ReviewsSlider() {

    return (

    // First Review Slider

    <>
    <div>
    <h2 className="card-title text-purple-400 justify-center mx-10 mt-60">Here are some of my reviews!</h2>
    <div className="w-full h-55 carousel  rounded ">
        <div className="carousel-item ">
            <div 
            style={{overflow: "hidden"}}
            className="container pt-20 pb-20 mr-5">
                <div className="card w-72 bg-base-100 shadow-xl bg-gradient-to-r from-sky-100 to-cyan-50 ">
                    <figure>
                        <img
                            style={{width: 180, height: 200,}}
                            src="pictures/lorena.jpg"
                            class="mt-5 px-15 rounded-xl shadow-xl"
                            alt="Avatar"
                        />
                    </figure>
                    <div className="card-body font-sans 'Raleway', sans-serif;">
                        <h2 className="card-title justify-center text-purple-300">Lorena</h2>
                         
                        
                    <div className="leading-loose">
                        <div className="text-display text-center">
                             <p className="text-black text-3xl-center ">"Pedro is always available and flexible scheduling reading times. His knowledge of astrological transitions are on point every time we have talked.
                             Each reading has been amazingly clear with soon happening predictions.</p>
                        </div>
                        <div class="card-actions justify-left">
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        <div className="carousel-item">
            <div className="container pt-20 pb-20 mr-5">
                <div className="card w-72 bg-base-100 shadow-xl bg-gradient-to-r from-sky-100 to-cyan-50">
                        <figure>
                            <img
                                style={{width: 180, height: 200,}} 
                                src="pictures/unnamed.jpg" 
                                class="mt-5 px-15 h-48 w-36 rounded-xl shadow-xl"
                                alt="Avatar"  
                            />
                        </figure>
                    <div className="card-body font-sans 'Raleway', sans-serif;">
                        <h2 className="card-title justify-center text-purple-400">Jennifer C</h2>

                       
                <div className="leading-loose">
                            <div className="text-display justify-center">
                                <p className="text-black text-3xl-center">"Besides being a gifted psychic, Pedro is a warm person and very easy to talk to. 
                                    Pedro is positive and it also feels like he is offering coaching in my life."
                                    Each reading has been amazingly clear with soon happening predictions.</p>
                            </div>
                        <div class="card-actions justify-left">
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        <div className="carousel-item">
        <div className="container pt-20 pb-20 mr-5">
                <div className="card w-72 bg-base-100 shadow-xl bg-gradient-to-r from-sky-100 to-cyan-50">
                        <figure>
                            <img 
                                style={{width: 180, height: 200,}}
                                src="pictures/christina.JPG" 
                                class="mt-5 px-15 w-36 rounded-xl shadow-xl" 
                                alt="Avatar" 
                            />
                            </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center text-purple-400">Christina F</h2>
                       

            <div className="leading-loose">
                <div className="text-display justify-center">
                        <p className="text-black text-3xl-center">I have been doing readings with Pedro for almost three years and
                               every reading is better than the last.
                               He is so accurate and descriptive! He makes you feel positive and hopeful.
                               He guides you to spiritual awakening and your utmost potential.</p>
                </div>
                <div class="card-actions justify-left">
                        </div>
                    </div>
                    </div>
                </div>
            </div>   
        </div> 
        <div className="carousel-item">
            <div className="container pt-20 pb-20 mr-5">
                <div className="card w-72 bg-base-100 shadow-xl bg-sky-50">
                    <figure>
                        <img 
                            style={{width: 180, height: 200,}}
                            src="pictures/4th.jpg" 
                            alt="Shoes" 
                            className="mt-5 px-15 h-48 w-36 rounded-xl shadow-xl"
                        />
                    </figure>
                <div className="card-body">
                        <h2 className="card-title justify-center text-purple-400">Jacqueline</h2>
                        
                    <div className="leading-loose">
                        <div className="text-display justify-center">
                        <p className="text-black text-3xl-center">"Words can’t express how amazing and accurate Pedro was! The one thing that I will always remember is that Pedro told me to ask for validation and that my spirit guide will 
                        show me what I need to know. I'm looking forward to my future that Pedro predicted!"</p>
                        </div>
                        <div class="card-actions justify-left">
                        </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div> 
    </div> 

</div>

</>





  )
}

export default ReviewsSlider


