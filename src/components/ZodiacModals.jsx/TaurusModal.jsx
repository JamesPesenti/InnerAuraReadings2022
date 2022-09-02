import React from 'react';
import ReactDOM from 'react-dom';
import "../ZodiacModals.jsx/ZodiacSigns.css"



const TaurusModal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div 
        style={{
           zIndex: 100,
           backgroundColor: 'white',
           position: 'center',
           justifyContent: "center",
           alignItems: "center",
           marginLeft: 0,
           marginRight: 0,
           borderRadius: 20,
           width: "80%",
           height: "100%", 
           padding: 50,
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
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p style={{fontSize: 20, color: "black"}}>
        taurus horoscope
        </p>
      </div>
    </div>
  </>, document.body
) : null;

export default TaurusModal;