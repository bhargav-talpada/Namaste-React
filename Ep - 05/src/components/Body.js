import React, { useState } from "react";
import ResturentCart from "./ResturentCart";
import resList from "../utils/apiData";


const Body = () => {
  let resturentList = [
    {
      "info": {
        "id": "103384",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "vwpscdnalrg9yxi1yckp",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.4
      },
    },
    {
      "info": {
        "id": "103385",
        "name": "Pizza Zone",
        "cloudinaryImageId": "vwpscdnalrg9yxi1yckp",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages",
          "Starters"
        ],
        "avgRating": 4.4
      },
    }
  ]

    return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={() => {
                resturentList = resturentList.filter(res => res.info.avgRating > 4)
                console.log(resturentList);
              }} >Top Rated Resturents</button>
            </div>
            <div className="resturent-carts">
                {/* First way 
                <ResturentCart resData={resList[0]} />
                <ResturentCart resData={resList[1]} />
                <ResturentCart resData={resList[2]} />
                <ResturentCart resData={resList[3]} />
                <ResturentCart resData={resList[4]} />
                <ResturentCart resData={resList[5]} />
                <ResturentCart resData={resList[6]} />
                <ResturentCart resData={resList[7]} />
                <ResturentCart resData={resList[8]} />
                <ResturentCart resData={resList[9]} />
                <ResturentCart resData={resList[10]} />
                <ResturentCart resData={resList[11]} />
                <ResturentCart resData={resList[12]} />
                <ResturentCart resData={resList[13]} />
                <ResturentCart resData={resList[14]} />
                <ResturentCart resData={resList[15]} />
                <ResturentCart resData={resList[16]} />
                <ResturentCart resData={resList[17]} />
                <ResturentCart resData={resList[18]} />
                <ResturentCart resData={resList[19]} />
                 */}
                 {/* and use map function to loop array (Secound way) */}
                { 
                  resturentList.map((resturent) => <ResturentCart key={resturent.info.id} resData={resturent} />)
                }
            </div>
        </div>
    )
}

export default Body;