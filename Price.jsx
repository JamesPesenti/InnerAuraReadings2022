import React from "react";
import Price from "./Price.css";

function P(){

return (
 

    <div>

<section id="prices">
<div className="shadow p-3 mb-5 bg-body rounded"></div>
<h2 className="section-heading">Let me guide you to the life you deserve</h2>
<br/>
<div className="shadow p-3 mb-5 bg-body rounded"></div>

    <div className="col-xs-12 col-lg-2">
        <div className="card">
            <div className="card-header">
                <h3 className="card-header">Text Me A Free Question! </h3>
            </div>
            <div className="card-body">
                <p className="price-text">Free!</p>
                <h5></h5>
                <h6 className="text-muted"> Check out my other services if you're satisfied with your results!
                </h6>
                <br/>
                <button type="button" className="btn btn-lg btn-block btn-outline-dark">Text (708)
                    543-9342</button>
            </div>
        </div>
    </div>


<div className="col-xs-12 col-lg-4">
    <div className="card">
        <div className="card-header">
            <h3 className="card-header">In-Person Reading</h3>
        </div>
        <div className="card-body">
            <h2 className="price-text">$50 <small className="text-muted">/ Hr</small></h2>
            <h5>1 Hour Reading</h5>
            <h6 className="text-muted">My most comprehensive way of connecting with you</h6>
            <h6>Best results!</h6>
            <p></p>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark">Call
                (708) 543-9342</button>
        </div>
    </div>
</div>

<div className="col-xs-12 col-lg-4">
    <div className="card">
        <div className="card-header">
            <h3 className="card-header">30 Minute Phone/ In-Person Reading</h3>
        </div>
        <div className="card-body">
            <h2 className="price-text">$30<small className="text-muted"></small></h2>
            <h5 className="text-muted">Simple and convenient way to gain insight into your future</h5>
            <h6 className="text-muted"></h6>
            <p><i className="far fa-comment-dots"></i></p>
            <h6>Lunch break special! </h6>
            <br/>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark"> Call | FaceTime<br/>
                (708) 543-9342</button>
        </div>
    </div>
</div>

<div className="col-xs-12 col-lg-4">
    <div className="card">
        <div className="card-header">
            <h3 className="card-header">Events And Party Readings</h3>
        </div>
        <div className="card-body">
            <h2 className="price-text">$150<small className="text-muted"> / Hr</small></h2>
            <h5></h5>
            <h6 className="text-muted">Book me for your parties and events!</h6>
            <br/>
            <i className="fas fa-gifts"></i>     <i className="fas fa-birthday-cake"></i>
            <p></p>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark"> Call
                (708) 543-9342</button>
        </div>
    </div>
</div>
</section>



<section id="prices2">
<div className="">
    <h2 className="txt--gradient-blue">Book your reading today, your future is waiting</h2>
</div>
</section>


    </div>
);

}



{/* <div>
<section id="prices">
<div className="shadow p-3 mb-5 bg-body rounded"></div>
<h2 className="section-heading">Let me guide you to the life you deserve</h2>
<br/>
<div className="shadow p-3 mb-5 bg-body rounded"></div>
<div className="row">

    <div className="col-xs-12 col-lg-4">
        <div className="card">
            <div className="card-header">
                <h3 className="card-header">Text Me A Free Question! </h3>
            </div>
            <div className="card-body">
                <p className="price-text">Free!</p>
                <h5></h5>
                <h6 className="text-muted"> Check out my other services if you're satisfied with your results!
                </h6>
                <br/>
                <button type="button" className="btn btn-lg btn-block btn-outline-dark">Text (708)
                    543-9342</button>
            </div>
        </div>
    </div>
</div>

<div className="col-xs-12 col-lg-4">
    <div className="card">
        <div className="card-header">
            <h3 className="card-header">In-Person Reading</h3>
        </div>
        <div className="card-body">
            <h2 className="price-text">$50 <small className="text-muted">/ Hr</small></h2>
            <h5>1 Hour Reading</h5>
            <h6 className="text-muted">My most comprehensive way of connecting with you</h6>
            <h6>Best results!</h6>
            <p></p>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark">Call
                (708) 543-9342</button>
        </div>
    </div>
</div>

<div className="col-xs-12 col-lg-4">
    <div className="card">
        <div className="card-header">
            <h3 className="card-header">30 Minute Phone/ In-Person Reading</h3>
        </div>
        <div className="card-body">
            <h2 className="price-text">$30<small className="text-muted"></small></h2>
            <h5 className="text-muted">Simple and convenient way to gain insight into your future</h5>
            <h6 className="text-muted"></h6>
            <p><i className="far fa-comment-dots"></i></p>
            <h6>Lunch break special! </h6>
            <br/>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark"> Call | FaceTime<br/>
                (708) 543-9342</button>
        </div>
    </div>
</div>

<div className="col-xs-12 col-lg-4">
    <div className="card">
        <div className="card-header">
            <h3 className="card-header">Events And Party Readings</h3>
        </div>
        <div className="card-body">
            <h2 className="price-text">$150<small className="text-muted"> / Hr</small></h2>
            <h5></h5>
            <h6 className="text-muted">Book me for your parties and events!</h6>
            <br/>
            <i className="fas fa-gifts"></i>     <i className="fas fa-birthday-cake"></i>
            <p></p>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark"> Call
                (708) 543-9342</button>
        </div>
    </div>
</div>
</section>

<section id="prices2">
<div className="">
    <h2 className="txt--gradient-blue">Book your reading today, your future is waiting</h2>
</div>
</section>
</div> */}

export default P;
