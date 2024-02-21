import React from "react";

const ResturentCart = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const styleCart = {
        backgroundColor: "#f0f0f0"
    }
    return(
        <div className="res-carts" style={styleCart}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="cart-img" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
        </div>
    )
}

export default ResturentCart;