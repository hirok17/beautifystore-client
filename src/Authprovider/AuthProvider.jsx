/* eslint-disable react-refresh/only-export-components */

/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext =createContext(null);
const auth =getAuth(app);
const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    const [loading, setLoading]=useState(true);
    const axiosPublic =useAxiosPublic();

    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                axiosPublic.post('/jwt', {email:currentUser.email})
                .then(res=>{
                    if(res.data){
                        localStorage.setItem('access-token', res?.data?.token);
                        setLoading(false);
                    }
                })
            }else{
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            
        })
        return ()=>{
            unSubscribe();
        }
    },[axiosPublic])
    const authInfo={user, createUser, userLogin, logOut, googleLogin, loading};
    return (
         <AuthContext.Provider value={authInfo}>
            {
                children
            }
         </AuthContext.Provider>
    );
};

export default AuthProvider;