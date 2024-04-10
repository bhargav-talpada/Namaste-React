import React from "react";
import { REST_IMG_URL } from "../utils/constants";

const ResturentCart = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return(
        <div className="res-carts m-4 p-4 w-60 h-96 bg-gray-200 rounded-md hover:bg-gray-400" >
            <img src={REST_IMG_URL+cloudinaryImageId} className="cart-img rounded-lg w-full h-32" />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
        </div>
    )
}

export default ResturentCart;