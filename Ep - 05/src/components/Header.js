import React from "react"

const Header = () => {
    return(
        <div className="header">
            <div className="">
                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;