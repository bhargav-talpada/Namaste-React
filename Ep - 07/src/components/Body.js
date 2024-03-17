import React, { useState, useEffect } from "react";
import ResturentCart from "./ResturentCart";
import resList from "../utils/apiData";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";


const Body = () => {

    const [resturentList, setResturentList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterdResturent, setFilterdResturent] = useState([]);

    useEffect(()=>{
      fetchData();
    }, [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2629975&lng=70.7862588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      //Optional Chaining
      setResturentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterdResturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //Conditional Rendering
    return resturentList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="searchinp" placeholder="Search..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="searchbtn" onClick={()=>{
                  const searchRestro = resturentList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilterdResturent(searchRestro)
                }}>Search</button>
              </div>
              <button className="filter-btn" onClick={() => {
                const filterdList = resturentList.filter(res => res.info.avgRating > 4.4)
                setResturentList(filterdList)
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
                  filterdResturent.map((resturent) => 
                    <Link to={"/restaurents/" + resturent.info.id} key={resturent.info.id} ><ResturentCart resData={resturent} /></Link>
                  )
                }
            </div>
        </div>
    )
}

export default Body;