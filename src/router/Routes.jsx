import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivetRout from "./PrivetRout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Products from "../pages/Dashboard/Products";
import AddProduct from "../pages/Dashboard/AddProduct";
import SellerRout from "./SellerRout";
import ErrorPage from "../pages/ErrorPage";
import MyCart from "../pages/Dashboard/MyCart";
import WishList from "../pages/Dashboard/WishList";
import ContactUs from "../pages/ContactUs";
import BuyerRout from "./BuyerRout";
import AllUser from "../pages/Dashboard/AllUser";
import AdminRout from "./AdminRout";

const router  =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/products',
                element:<Shop />
            },
            {
                path:'/about-us',
                element:<About />
            },
            {
                path:'/contact-us',
                element:<ContactUs />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivetRout><DashboardLayout /></PrivetRout>,
        children:[
            {
                index:true,
                element:<PrivetRout><DashboardHome></DashboardHome></PrivetRout>
            },
            {
                path:'products',
                element:<PrivetRout><SellerRout><Products /></SellerRout></PrivetRout>
            },
            {
                path:'add-product',
                element:<PrivetRout><SellerRout><AddProduct /></SellerRout></PrivetRout>
            },
            {
                path:'my-cart',
                element:<PrivetRout><BuyerRout><MyCart /></BuyerRout></PrivetRout>
            },
            {
                path:'wish-list',
                element:<PrivetRout><BuyerRout><WishList /></BuyerRout></PrivetRout>
            },
            {
                path:'users',
                element:<PrivetRout><AdminRout><AllUser /></AdminRout></PrivetRout>
            }
        ]
    }
])

export default router;