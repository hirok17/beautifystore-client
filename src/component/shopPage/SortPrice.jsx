/* eslint-disable react/prop-types */

const SortPrice = ({setSort}) => {
    return (
        <div>
            <select onChange={(e)=>setSort(e.target.value)} defaultValue='default' className="select select-warning w-full">
                <option disabled value='default'>Default sorting</option>
                <option value='asc'>Low to High</option>
                <option value='desc'>High to Low</option>
                
            </select>
        </div>
    );
};

export default SortPrice;