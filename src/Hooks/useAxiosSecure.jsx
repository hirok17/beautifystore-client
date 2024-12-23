import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

export const axiosSecure =axios.create({
    baseURL:'https://beautifystore-server.vercel.app'
});
const useAxiosSecure = () => {
    const navigate =useNavigate();
    const {logOut} =useAuth();
    axiosSecure.interceptors.request.use((config)=>{
        const token =localStorage.getItem('access-token');
        config.headers.authorization=`Bearer ${token}`;
        return config;
    }, (error)=>{
        return Promise.reject(error);
    }
);
// Add a response interceptor
    axiosSecure.interceptors.response.use((response)=>{
        return response;
    }, async(error)=>{
        const errorStatuse =error.response.status;
        if(errorStatuse === 401 || errorStatuse === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    });
    
    return axiosSecure;
    
};

export default useAxiosSecure;