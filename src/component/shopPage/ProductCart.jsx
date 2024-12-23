/* eslint-disable react/prop-types */

import { FaHeart } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserData from "../../Hooks/useUserData";
import toast from "react-hot-toast";

const ProductCart = ({product}) => {
    const axiosSecure =useAxiosSecure();
    const userData =useUserData();
    const userEmail =userData?.email;

    const handelWishList= ()=>{
        axiosSecure.patch('/wishlist', {userEmail, productId:product._id})
        .then(res=>{
            if(res.data.modifiedCount > 0){
                toast.success('added to wishlist');
            }
        })
    }
    const {title, image, category, price} =product;
    return (
        <section>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className="overflow-hidden">
                    <img
                        className="hover:scale-125 transition-all ease-in-out"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-base font-medium">{title}</h2>
                    <p className="font-medium">{category}</p>
                    <span>${price.toFixed(2)}</span>
                    <div className="">
                        <button className="btn btn-primary w-full">Add to Cart</button>
                    </div>
                </div>
                <FaHeart onClick={handelWishList} title="Wishlist" size={20} color="#F97316" className="absolute right-5 top-8 cursor-pointer" />
            </div>
        </section>
    );
};

export default ProductCart;