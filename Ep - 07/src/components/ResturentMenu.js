import { useEffect, useState } from "react";
import Shimmer from '../components/ShimmerUI'
import { useParams } from 'react-router-dom'
import { MENU_API } from "../utils/constants";
import MenuBody from "./MenuBody";

const ResturentMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        FetchMenu();
    },[])

    const FetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json(); 
        console.log(json);
        setResInfo(json.data)
    }
    if(resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, areaName, avgRating } = resInfo?.cards[0]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p> 
            <p>{areaName}</p>
            <h3>{avgRating}</h3>
            <div>
                <h2>Recommended</h2>
                {/* {
                    itemCards.map(item => 
                        <h4 key={item.card.info.id}>
                            {item.card.info.name} - ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                        </h4>
                    )
                } */}
                {
                    resInfo.map((resMenu) => {
                        <MenuBody menuData={resMenu} />
                    })
                }
            </div>
        </div>
    )
}

export default ResturentMenu;