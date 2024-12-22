import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";

const Sidebar = () => {
    const { logOut } = useAuth();
    const userData = useUserData();
    const isSeller = userData?.role === 'seller';
    const isBuyer = userData?.role === 'buyer';
    const isAdmin = userData?.role === 'admin';
    return (
        <div className="flex flex-col gap-5 mt-5 fixed">
            <div className="flex-grow ml-10">
                <ul className="flex flex-col gap-8">
                    {
                        isAdmin && <>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard/all-users'>All Users</Link></li>
                        </>

                    }
                    {
                        isSeller && <>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard/products'>My Products</Link></li>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard/add-product'>Add Product</Link></li>
                        
                        </>
                    }
                    {
                        isBuyer && <>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard/my-cart'>My Cart</Link></li>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard/wish-list'>Wish List</Link></li>
                            <li className="bg-white w-full px-8 py-4 rounded-lg"><Link to='/dashboard/my-order'>My Order</Link></li>
                        </>
                    }

                </ul>
            </div>
            <div className="flex gap-2 ml-10">
                <button onClick={() => logOut()} className="btn btn-primary">Logout</button>
                <Link to='/'><button className="btn btn-success">Home</button></Link>
            </div>
        </div>
    );
};

export default Sidebar;