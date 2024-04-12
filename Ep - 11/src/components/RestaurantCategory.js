import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({data}) => {
    console.log(data);
    return(
        <div>
            {/* Header */}
            <div className="flex justify-between items-center w-6/12 bg-gray-100 my-4 mx-auto shadow-lg p-4 cursor-pointer">
                <span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
                <span className=""><IoIosArrowDown /> </span>
            </div>
            {/* Accordian Body */}
        </div>
    ) 
}

export default RestaurantCategory;
