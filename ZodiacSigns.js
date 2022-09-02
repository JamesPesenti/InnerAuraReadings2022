import { useState } from 'react'
import "../ZodiacModals.jsx/ZodiacSigns.css"
import useModal from './useModal';
import HoroscopeData from "../../HoroscopeData"
import HoroscopeList from "../ZodiacModals.jsx/HoroscopeList"


const ZodiacModal = () => {
  const [horoscope, setHoroscope] = useState(HoroscopeData)

  return (
  <>
    <HoroscopeList 
      horoscope={horoscope}
    />

  </>

  )
}
  



export default ZodiacModal