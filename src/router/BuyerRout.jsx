/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useUserData from "../Hooks/useUserData";
import Spinner from "../component/Loder/Spinner";

 

const BuyerRout = ({children}) => {
    const {user, loading} =useAuth();
    const userData =useUserData();
    const location =useLocation();

    if(loading || !userData.role){
        return <Spinner />
    }

    if(user && userData.role === 'buyer'){
        return children;
    }
   return <Navigate to='/' state={{from: location}} replace></Navigate>;
};

export default BuyerRout;