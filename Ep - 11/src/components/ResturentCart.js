import React from "react";
import { REST_IMG_URL } from "../utils/constants";

const ResturentCart = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return(
        <div className="res-carts m-4 p-4 w-60 h-96 bg-gray-100 rounded-md transition-all duration-700 hover:scale-110 hover:bg-gray-300" >
            <img src={REST_IMG_URL+cloudinaryImageId} className="cart-img rounded-lg w-full h-32" />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
        </div>
    )
}

// Higher Order Components

export const promotedLabel = (ResturentCart) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-gray-700 text-white p-2 m-2 rounded-md">Promoted</label>
                <ResturentCart {...props} />
            </div>
        )
    }
}

export default ResturentCart;