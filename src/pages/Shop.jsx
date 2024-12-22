import { useEffect, useState } from "react";
import FilterBar from "../component/shopPage/FilterBar";
import ProductSearch from "../component/shopPage/ProductSearch";
import SortPrice from "../component/shopPage/SortPrice";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Spinner from "../component/Loder/Spinner";
import ProductCart from "../component/shopPage/ProductCart";

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [loading, setLoading] =useState(false);
    const [search, setSearch] =useState('');
    const [sort, setSort] =useState('');
    const [brand, setBrand] =useState('');
    const [category, setCategory] =useState('');
    const [brands, setBrands]=useState([]);
    const [categories, setCategories] =useState([])
    const axiosPublic =useAxiosPublic();
    console.log(brand, category, search);
   
  
    useEffect(()=>{
        setLoading(true);
        const fetch =async()=>{
           await axiosPublic.get(`/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`)
            .then(res=>{
               setProducts(res.data.products);
               setBrands(res.data.brands);
               setCategories(res.data.categories);
               console.log(res.data);
            
               setLoading(false);
            })
        }
        fetch();
    },[search, sort, brand, category, axiosPublic])
    const heandelSearch =e=>{
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value='';
    }

    const handelReset =()=>{
        setSearch('');
        setBrand('');
        setCategory('');
        setSort('asc');
        window.location.reload();
    }
    return (
        <section>
            <div className="py-16 bg-cover bg-center" style={{
                backgroundImage: "url(https://woodmart.xtemos.com/cosmetics/wp-content/uploads/sites/22/2024/10/c2-sld-bg-1-opt.jpg)",
            }}>

                <h2 className="text-center text-3xl font-bold font-mono text-white">All Products</h2>
            </div>
            <div className="container mx-auto">
                {/* search and sorting start */}
                <div className="flex justify-between mt-5">
                    <ProductSearch heandelSearch={heandelSearch} />
                    <SortPrice setSort={setSort} />
                </div>
                 {/* search and sorting end */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6">
                    <div className="lg:col-span-2 bg-[#F5F7F8] drop-shadow lg:min-h-screen rounded">
                      <div className="mt-4 ml-4">
                         <FilterBar 
                         brands={brands}
                         categories={categories}
                         setBrand={setBrand} 
                         setCategory={setCategory} 
                         handelReset={handelReset} />
                      </div>
                    </div>
                    <div className="lg:col-span-10">
                      {/* products card */}
                      {
                        loading 
                        ?
                        <Spinner />
                        :<>
                            {
                                products.length ===0 ?<>
                                    <div>
                                        <h2 className="text-2xl font-bold text-center">No Products found</h2>
                                    </div>
                                </>
                                :<>
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {
                                            products.map(product=><ProductCart key={product._id} product={product}></ProductCart>)
                                        }
                                    </div>
                                </>
                                
                                
                            }
                        </>
                      }
                    </div>
                </div>
                 {/*  end product section */}
            </div>
        </section>
    );
};

export default Shop;