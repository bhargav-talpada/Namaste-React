import { MdStar } from "react-icons/md";
import { REST_IMG_URL } from "../utils/constants";
import { FaStopCircle } from "react-icons/fa";

const ItemList = ({items}) => {
    console.log("Items",items);

    return(
        <div className="">
            {items.map((item) => 
                <div key={item.card.info.id} className="flex justify-between items-center p-2 m-1 border-b-2 border-gray-300" >
                    <div className="flex flex-col text-left w-96">
                        <div className="flex flex-col py-2">
                            <span className="text-xl">{item.card.info.name}</span>
                            <span className="text-xl">₹{item.card.info.price / 100}</span>
                            <span className="flex"><MdStar className="text-green-400 mr-1" />{item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                        </div>
                        <p className=" text-gray-500 mb-5">{item.card.info.description}</p>
                    </div>
                    <div>
                        <img src={REST_IMG_URL + item.card.info.imageId} className="w-40 h-36 rounded-xl" />
                    </div>
                </div>
                
            )}
            
        </div>
    )
}

export default ItemList;