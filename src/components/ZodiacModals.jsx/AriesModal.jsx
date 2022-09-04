import React from 'react';
import ReactDOM from 'react-dom';
import "../ZodiacModals.jsx/ZodiacSigns.css"



const AriesModal = ({ isShowing, hide, toggle, item }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div 
        isShowing={isShowing}
        style={{
           zIndex: 100,
           backgroundColor: 'white',
           position: 'center',
           justifyContent: "center",
           alignItems: "center",
           marginLeft: 5,
           marginRight: 5,
           borderRadius: 65,
           width: "100%",
           height: "125%", 
           paddingRight: 0,
           paddingLeft: 0,
           shadow: 50, 
           overflow: "hidden"
           }}
           >
        <div className="modal-header">
          <button 
              className="modal-close-button"  
              type="button" 
              data-dismiss="modal" 
              aria-label="Close" 
              onClick={hide}
          >
           {/* <img src="https://www.horoscope.com/images-US/signs/profile-aries.png"/> */}
            <span className="span" aria-hidden="true">&times;</span>
          </button>
        </div>
        <button className="button-default" onClick={toggle}>
       <img style={{justifyContent: "center", alignItems: "center", marginLeft: -5}} src={`${item.source}`} />
    </button>
    <div style={{justifyContent: "center", alignItems: "center"}}>
        <p style={{fontSize: 20, color: "black", margin: 10}}>
           {item.sign}
        </p>
        <p style={{fontSize: 20, color: "black", margin: 10}}>
          {item.date}
        </p>
        <p style={{fontSize: 20, color: "black", margin: 20}}>
          {item.horoscope}
        </p>
        <p style={{fontSize: 20, color: "black", margin: 10}}>
          {`Your Lucky Number is ${item.luckyNumber}`}
        </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;

export default AriesModal;
