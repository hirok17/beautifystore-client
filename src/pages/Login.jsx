import { useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillGoogleCircle } from "react-icons/ai";
import useAxiosPublic from "../Hooks/useAxiosPublic";

 

const Login = () => {
    const {userLogin, googleLogin}=useAuth();
    const navigate =useNavigate();
    const axiosPublic =useAxiosPublic();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
             userLogin(formData.email, formData.password)
             .then(result=>{
                const newUser =result.user;
                console.log(newUser);
                toast.success('Login success');
                navigate('/');
             })
             .catch(error=>{
                console.log(error);
                toast.error('password worng');
             })
    };

    const googleSignUp=()=>{
        googleLogin()
        .then(result=>{
            const googleUser =result.user;
            console.log(googleUser);
            const userData={
                email:result.user?.email,
                role:'buyer',
                status:'approved',
                wishlist:[]
                
            }
            axiosPublic.post('/users', userData)
            .then(res=>{
                console.log(res.data);
            })
            navigate('/');
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }
    return (
        <section className="bg-gray-100">
        <div className="flex flex-col justify-center items-center py-10">
            <form
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Login Now</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Login
                </button>
            </form>
             <button onClick={googleSignUp} className="btn btn-secondary w-40 mt-5"> <AiFillGoogleCircle className="text-5xl" /></button>
        </div>
    </section>
    );
};

export default Login;