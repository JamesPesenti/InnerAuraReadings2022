import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as HomeIcon} from "../assets/svg/homeIcon.svg"
import BottomTabsCss from "./BottomTabsCss.css"
import { GiCrystalBall } from "react-icons/gi"
import { IoMdPlanet } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi"




function BottomTabs() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return true
        }
    }

  return (
    <footer className="bottomtabs fixed">
        <nav className="bottomtabsNav">
            <ul className="tabbarListItems">
                <li className="tabbarListItem" onClick={() => navigate("/")}>
                    <HomeIcon fill={pathMatchRoute("/") ? "#6a516b" : "#d6a1d5"} size={0}/>
                    <p className={pathMatchRoute("/") 
                        ? "tabbarListItemNameActive" 
                        : "tabbarListItemName"}>Home</p>
                </li>
                <li className="tabbarListItem" onClick={() => navigate("/about")}>
                    <GiCrystalBall fill={pathMatchRoute("/about") ? "#6a516b" : "#d6a1d5"} size={35}/>
                    <p className={pathMatchRoute("/about") 
                        ? "tabbarListItemNameActive" 
                        : "tabbarListItemName"}>About Me</p>
                </li>
                <li className="tabbarListItem" onClick={() => navigate("/astrology")}>
                    <IoMdPlanet fill={pathMatchRoute("/astrology") ? "#6a516b" : "#d6a1d5"} size={35}/>
                    <p  className={pathMatchRoute("/astrology") 
                        ? "tabbarListItemNameActive" 
                        : "tabbarListItemName"}>Astrology</p>
                </li>
                    {/* extra */}
                <li className="tabbarListItem" onClick={() => navigate("/prices")}>
                    <GiTakeMyMoney fill={pathMatchRoute("/prices") ? "#6a516b" : "#d6a1d5"} size={35}/>
                    <p  className={pathMatchRoute("/prices") 
                        ? "tabbarListItemNameActive" 
                        : "tabbarListItemName"}>Prices</p>
                </li>

            </ul>
        </nav>

    </footer>
  )
}

export default BottomTabs