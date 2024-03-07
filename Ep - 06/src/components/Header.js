import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";

export const Header = () => {

    const [btnName, setBtnName] = useState('LogIn')

    
    return(
        <div className="header">
            <div className="">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button onClick={()=>{setBtnName("LogOut")}} className="btnlogin">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;