import { useEffect, useState } from "react";
import useUserData from "../../Hooks/useUserData";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
 


const WishList = () => {
    const [wishList, setWishList] = useState([]);
    const userData = useUserData();
    const axiosSecure = useAxiosSecure();
    console.log(wishList);

    useEffect(() => {
        const fetchData = async () => {
            await axiosSecure.get(`/wishlist/${userData._id}`)
                .then(res => {
                    setWishList(res.data);
                })
        }
        if (userData._id ) {
             fetchData();
           
        }

    }, [userData, axiosSecure])
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mt-16">wishlist</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishList.length > 0 ? wishList.map((item, index)=><>
                                         <tr key={item._id}>
                            <th>{index +1}</th>
                            <td>{item?.title}</td>
                            <td>${item?.price}</td>
                            <td>{item?.category}</td>
                        </tr>
                            </>)
                            :
                            <>
                                <h2> You have no product</h2>  
                          </>
                        }
                   
                      
                     
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;