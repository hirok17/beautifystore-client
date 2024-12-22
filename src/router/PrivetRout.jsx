/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Spinner from "../component/Loder/Spinner";

const PrivetRout = ({children}) => {
    const {user, loading}=useAuth();
    const location=useLocation();

    if(loading){
        return <Spinner></Spinner>;
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>;
   
};

export default PrivetRout;