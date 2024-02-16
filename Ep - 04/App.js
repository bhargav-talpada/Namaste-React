import React from "react"
import ReactDOM from "react-dom"

const Header = () => {
    return(
        <div className="header">
            <div className="">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
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

const styleCart = {
    backgroundColor: "#f0f0f0"
}

const ResturentCart = (props) =>{
    console.log(props);
    return(
        <div className="res-carts" style={styleCart}>
            <img src={props.pic} className="cart-img" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.ratings}</h4>
            <h4> ₹ {props.price}/-</h4> {/* ₹ = ctrl + alt + 4 */}
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="resturent-carts">
                <ResturentCart pic="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg" resName="McDonald's" cuisine="Burger" ratings="4.5" price="250" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyga4v2rvBpRr8JqkmeVoPgHggrnriBT12A&usqp=CAU" resName="KFC" cuisine="Burger" ratings="4.1" price="200" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXZxM9oJMgCXnxPeMhjA_sSlUDyEF7IQw-Q&usqp=CAU" resName="Radhika Resturent" cuisine="Gujrati" ratings="4.9" price="300" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ycQho5biF0TZLGOuDtp2jStnUNAqqzlXhg&usqp=CAU" resName="Dosa King" cuisine="Dosa" ratings="4.7" price="150" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJydPrUBUDzYua1r64fnYogIL4K4mgw4Vk5g&usqp=CAU" resName="Vag Resturent" cuisine="Salad" ratings="4.5" price="100" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU" resName="Italian" cuisine="Pasta" ratings="4.2" price="200" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNOJPyAQOmcIB5Z39-ihreKR_xOC0cTMhaQ&usqp=CAU" resName="Pizza Zone" cuisine="Pizza" ratings="4.8" price="300" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf391ACwikCqOufJ2-igWdPDqGCfHrv59QGw&usqp=CAU" resName="Chinese" cuisine="Chinese" ratings="4.6" price="80" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtu0KlvTo_ArffO9kmWBOqk1OKckfQ8uOuw&usqp=CAU" resName="Haemony Resto" cuisine="Manchurian" ratings="4.4" price="80" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjurD2Qr8ezZIOcQZZynRFv2YW4A1CsADPQ&usqp=CAU" resName="Atul Ice-Cream" cuisine="Ice-cream" ratings="4.9" price="100" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazXXWOPmILwupQIpKcMWJgiYqma9MFFsVww&usqp=CAU" resName="DNS" cuisine="Milkshake" ratings="4.7" price="200" />
                <ResturentCart pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDJhzkMcRkocMZwNr_3hdL0UAWFjbdVtZ1A&usqp=CAU" resName="Amul" cuisine="Ice-creame cone" ratings="4.8" price="50" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)