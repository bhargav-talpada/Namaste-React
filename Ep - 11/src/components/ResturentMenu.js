import Shimmer from '../components/ShimmerUI'
import useResturentMenu from '../utils/useResturentMenu';
import { useParams } from 'react-router-dom'

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
    var {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu m-4 p-4 ">
            <h1 className='text-xl font-bold'>{name}</h1>
            <p className='text-xs'>{cuisines.join(", ")} - {costForTwoMessage}</p> 
            <p className='text-xs'>{areaName}</p>
            <h3 className='text-xs'>{avgRating}</h3>
            <div>
                <h2>Recommended</h2>
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