import { useEffect, useState } from "react";

const ResturentMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        FetchMenu();
    },[])

    const FetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.2629975&lng=70.7862588&restaurantId=139281&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    }

    const {name, costForTwoMessage, cuisines, areaName, avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p> 
            <p>{areaName}</p>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default ResturentMenu;