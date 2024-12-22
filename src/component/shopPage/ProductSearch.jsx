/* eslint-disable react/prop-types */
import { AiOutlineSearch } from "react-icons/ai";

const ProductSearch = ({heandelSearch}) => {
    return (
        <div>
        <form onSubmit={heandelSearch} className="flex w-full">
            <input
                type="text"
                name="search"
                placeholder="Search for products"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-[#F85606] text-white rounded-r-md hover:bg-orange-500 transition"
            >
               <AiOutlineSearch className="text-lg" />
            </button>
        </form>
    </div>
    );
};

export default ProductSearch;