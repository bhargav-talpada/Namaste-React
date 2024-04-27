import React from "react";
import { REST_IMG_URL } from "../utils/constants";

const ResturentCart = (props) =>{
    const {resData} = props;
    // console.log("reddata", resData);
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return(
        <div data-testid="resCard" className=" res-carts m-4 p-4 w-60 h-[415px] bg-gray-100 rounded-md transition-all duration-700 hover:scale-110 hover:bg-gray-300" >
            <img src={REST_IMG_URL+cloudinaryImageId} className="cart-img rounded-lg w-full h-32" />
            <h3 className="font-bold py-4 text-2xl">{name}</h3>
            <h4 className="my-2">{cuisines.join(", ")}</h4>
            <h4 className="my-2">{avgRating}</h4>
            <h4 className="my-2">{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
            <h4 className="my-2">{sla.deliveryTime} Minutes</h4>
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