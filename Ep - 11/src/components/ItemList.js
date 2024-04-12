import { MdStar } from "react-icons/md";

const ItemList = ({items}) => {
    console.log("Items",items);

    return(
        <div className="">
            {items.map((item) => 
                <div key={item.card.info.id} className="flex flex-col justify-start items-start p-2 m-2 border-b-2 border-gray-300" >
                    <div className="flex flex-col justify-start items-start">
                        <span className="text-xl">{item.card.info.name}</span>
                        <span className="text-xl">₹{item.card.info.price / 100}</span>
                        <span className="flex items-center justify-center"><MdStar className="text-green-400 mr-1" />{item.card.info.ratings.aggregatedRating.rating}</span>
                    </div>
                    <p className="text-gray-500">{item.card.info.description}</p>
                </div>
            )}
            
        </div>
    )
}

export default ItemList;