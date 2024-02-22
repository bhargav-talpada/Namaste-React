import React, { useState } from "react";
import ResturentCart from "./ResturentCart";
import resList from "../utils/apiData";


const Body = () => {

    return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={() => {console.log('btn clicked');}} >Top Rated Resturents</button>
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
                  resList.map((resturent) => <ResturentCart key={resturent.info.id} resData={resturent} />)
                }
            </div>
        </div>
    )
}

export default Body;