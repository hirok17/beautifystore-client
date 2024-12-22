/* eslint-disable react/prop-types */

import { FaHeart } from "react-icons/fa";

const ProductCart = ({product}) => {
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
                <FaHeart title="Wishlist" size={20} color="#F97316" className="absolute right-5 top-8 cursor-pointer" />
            </div>
        </section>
    );
};

export default ProductCart;