import React from 'react'
import AriesModal from "../ZodiacModals.jsx/AriesModal"
import TaurusModal from "../ZodiacModals.jsx/TaurusModal"
import useModal from '../ZodiacModals.jsx/useModal';

const HoroscopeItem = ({ item }) => {
    const {isShowing, toggle} = useModal();
  return (
    <>
    <button className="button-default" onClick={toggle}>
       <img src={`${item.source}`} />
       <div>
            <p style={{fontSize: 14, letterSpacing: 3,}}>{item.sign}</p>
       </div>
    </button>
        <AriesModal 
            isShowing={isShowing} 
            hide={toggle}
            item={item}
        />

    {/* 
        <TaurusModal 
            isShowing={isShowing} 
            hide={toggle}
            item={item}
        /> */}
   
    </>
  )
}

export default HoroscopeItem