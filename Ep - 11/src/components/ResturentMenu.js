import Shimmer from '../components/ShimmerUI'
import useResturentMenu from '../utils/useResturentMenu';
import { useParams } from 'react-router-dom'
import { MdStars } from "react-icons/md";
const ResturentMenu = () => {

    const {resId} = useParams();

    const resInfo = useResturentMenu(resId);

    // useEffect(()=>{
    //     FetchMenu();
    // },[])

    // const FetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json(); 
    //     console.log(json);
    //     setResInfo(json.data)
    // }

    if(resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, areaName, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return(
        <div className="menu text-center">
            <h1 className='font-bold text-4xl my-6'>{name}</h1>
            <h3 className='text-2xl m-2 flex items-center justify-center'> <MdStars className='text-green-600 mr-1' /> {avgRating} • {costForTwoMessage}</h3>
            <p className='text-xl m-2 text-red-500'>{cuisines.join(", ")}</p> 
            <p className='text-xl m-2 text-gray-400'>{areaName}</p>
            <div>
                <h2 className='text-xl'>Recommended</h2>
                {
                    itemCards.map(item => 
                        <h4 key={item.card.info.id}>
                            {item.card.info.name} - ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                        </h4>
                    )
                }
            </div>
        </div>
    )
}

export default ResturentMenu;