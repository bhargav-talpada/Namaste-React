import React, { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

    const [btnName, setBtnName] = useState('LogIn')
    
    const onlineStatus = useOnlineStatus();

    return(
        <div className="header flex justify-between items-center bg-pink-100 shadow-xl m-2">
            <div className="">
                <img className="logo w-40" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex justify-center items-center p-4 m-4">
                    <li> {onlineStatus ? "🟢" : "🔴"} </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link>Cart</Link></li>
                    <button onClick={()=>{btnName === 'LogIn' ? setBtnName("LogOut") : setBtnName("LogIn")}} className="btnlogin">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;