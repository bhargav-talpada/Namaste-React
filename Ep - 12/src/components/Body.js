import React, { useState, useEffect, useContext } from "react";
import ResturentCart, { promotedLabel } from "./ResturentCart";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RiWifiOffLine } from "react-icons/ri";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [resturentList, setResturentList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterdResturent, setFilterdResturent] = useState([]);

    const ResturentCartPromoted = promotedLabel(ResturentCart);

    useEffect(()=>{
      fetchData();
    }, [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2629975&lng=70.7862588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      //Optional Chaining
      setResturentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterdResturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(resturentList);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
      return(
        <div className="status h-screen w-screen flex flex-col justify-center items-center">
          <RiWifiOffLine className="offline text-6xl" />
          <h1 className="onlinestatus text-4xl mt-4 text-red-500">Oops Please, check your internet connection.</h1>
        </div>
      ) 

      const {loggedInUser,setUserName} = useContext(UserContext);

    //Conditional Rendering
    return resturentList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex justify-between items-center">
              <div className="search m-2 p-3">
                <input type="text" className="searchinp p-2 border border-solid border-black " placeholder="Search..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="searchbtn border border-green-300 rounded-md px-5 py-2 bg-green-200 m-4 cursor-pointer" onClick={()=>{
                  const searchRestro = resturentList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setResturentList(searchRestro)
                }}>Search</button>
              </div>

              <div>
                <label className="text-xl"> UserName :  </label>
                <input className="border border-black p-2" onChange={(e) => setUserName(e.target.value)} value={loggedInUser} />
              </div>

              <div>
                <button className="filter-btn px-5 py-2 mr-3 border border-gray-200 rounded-md bg-gray-200 cursor-pointer" onClick={() => {
                  const filterdList = resturentList.filter(res => res.info.avgRating > 4.3)
                  setFilterdResturent(filterdList)
                }} >Top Rated Resturents</button>
              </div>

            </div>
            <div className="resturent-carts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {/* and use map function to loop array (Secound way) */}
                { 
                  filterdResturent.map((resturent) => 
                    <Link to={"/restaurents/" + resturent.info.id} key={resturent.info.id} >
                      {
                        resturent.info.promoted ? <ResturentCartPromoted resData={resturent} /> : <ResturentCart resData={resturent}  />
                      }
                    </Link>
                  )
                }
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
            </div>
        </div>
    )
}

export default Body;