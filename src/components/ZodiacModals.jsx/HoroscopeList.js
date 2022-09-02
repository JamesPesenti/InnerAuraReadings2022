import React from 'react'
import HoroscopeItem from "./HoroscopeItem"

const HoroscopeList = ({ horoscope }) => {


  return (
    <>
    {horoscope.map((item) => (
       <HoroscopeItem
            key={item.id}
            item={item}
        />
       ))}
    </>
  )
}

export default HoroscopeList