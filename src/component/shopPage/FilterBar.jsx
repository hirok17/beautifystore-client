/* eslint-disable react/prop-types */
import { FaFilter } from "react-icons/fa";

const FilterBar = ({setBrand, setCategory, handelReset, brands, categories}) => {
    return (
        <section>
            <div className="flex gap-1 items-center">
                <FaFilter size={20} />
                <h2 className="text-xl font-bold">Filters</h2>
            </div>
            <div className="flex justify-between lg:flex-col mr-3 lg:mr-0">
            <div className="mt-4">
                <select onChange={(e)=>setCategory(e.target.value)} defaultValue='default' className="select select-warning focus:outline-none lg:w-40">
                    <option value='default' disabled selected>Product categories</option>
                    {
                        categories.map(item=><>
                             <option key={item} value={item}>{item}</option>
                        </>)
                    }
               
                 
                </select>
            </div>
            <div className="mt-4">
                <select onChange={(e)=>setBrand(e.target.value)} defaultValue='default' className="select select-warning focus:outline-none lg:w-40">
                    <option value='default' disabled selected> product Brand</option>
                    {
                        brands.map(item=><>
                            <option key={item._id} value={item}>{item}</option>
                        </>)
                    }
                
                   

                </select>
            </div>
            </div>
            <button onClick={handelReset} className="btn btn-primary lg:w-40 mt-4">Reset</button>
        </section>
    );
};

export default FilterBar;