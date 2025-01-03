import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
 

 

const useProducts = () => {
    const axiosPublic =useAxiosPublic();
    const {data: products=[], isLoading} =useQuery({
          queryKey:['products'],
          queryFn:async()=>{
              const res=await axiosPublic.get('/all-products')
              return res.data.products;
          }
          
    })
    

    return [products, isLoading];
};

export default useProducts;