import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    return(
        <div>
            {/* Header */}
            <div className=" items-center w-6/12 bg-gray-50 my-4 mx-auto shadow-lg shadow-gray-400 p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className=""><IoIosArrowDown /> </span>
                    </div>
                {/* Accordian Body */}
                <ItemList items={data.itemCards} />
            </div>
        </div>
    ) 
}

export default RestaurantCategory;
