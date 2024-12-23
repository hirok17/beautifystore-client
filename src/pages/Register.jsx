import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { AiFillGoogleCircle } from "react-icons/ai";
import useAxiosPublic from "../Hooks/useAxiosPublic";



const Register = () => {
    const { createUser, googleLogin } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    });


    const [error, setError] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const googleSignUp = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                const userData = {
                    email: result.user?.email,
                    role: 'buyer',
                    status: 'approved',
                    wishlist: []

                }
                axiosPublic.post('/users', userData)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = formData.email;
        const role = formData.role;
        const status = role === 'buyer' ? 'approved' : 'pending';
        const wishlist = [];
        const userData = { email, role, status, wishlist };
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
        } else if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
        } else {
            setError('');
            createUser(formData.email, formData.password)
                .then(() => {
                    axiosPublic.post('/users', userData)
                        .then(res => {
                            if (res.data.insertedId) {
                                toast.success('Sign Up success');
                            }
                        })

                    navigate('/');
                })
                .catch(error => {
                    toast.error(error.message);
                })
        }
    };
    return (
        <section className="bg-gray-100">
            <div className="flex flex-col justify-center items-center py-10">
                <form
                    className="p-8 rounded shadow-md w-full max-w-sm bg-white"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

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
                        <label htmlFor="email" className="block text-gray-700 mb-2">Role</label>
                        <select
                            name="role"
                            id="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>

                            <option value="" disabled>Select a role</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
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

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>
                </form>
                <button onClick={googleSignUp} className="btn btn-secondary w-40 mt-5"> <AiFillGoogleCircle className="text-5xl" /></button>
            </div>
            <div className="pb-7">
                <Link to="/login">
                    <h3 className='text-center text-[#D1A054]'>Already registered? Go to log in</h3>
                </Link>

            </div>

        </section>
    );
};

export default Register;