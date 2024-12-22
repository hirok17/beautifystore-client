import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddProduct = () => {
    const {user} =useAuth();
    const axiosSecure =useAxiosSecure();
    const {register, handleSubmit, reset} =useForm();
    const onSubmit = (data) => {
        const title =data.title;
        const brand =data.brand;
        const price = parseFloat(data.price);
        const stock = parseFloat(data.stock);
        const category =data.category;
        const description =data.description;
        const image =data.image;
        const sellerEmail =user.email;

        const productData ={
            title, brand, price, stock, category, description, image, sellerEmail
        }
        axiosSecure.post('/products', productData)
        .then(res=>{
            if(res.data.insertedId){
                toast.success('product add successfully');
                reset();
            }
        })
    }
    return (
        <section className="bg-[#F5F7FC] py-10 px-3">
        <h2 className="text-5xl font-bold text-center">Create Product</h2>
        <div className="max-w-[950px] mx-auto bg-white px-8 py-10 rounded-lg drop-shadow-sm mt-8 border-t-4 border-b-4 border-[#E6612A]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="text-base text-[#202124] font-medium">Product Name</span>
                    </label>
                    <input type="text" {...register("title")} placeholder="Product Name" className="input input-bordered h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#E6612A]" required />
                </div>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="text-base text-[#202124] font-medium">Description</span>
                    </label>
                    <textarea {...register("description")} placeholder="short description about the product" cols="30" rows="100" className="input input-bordered bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#E6612A] h-[200px]"></textarea>
                
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Product Category</span>
                        </label>
                        <input {...register("category")} type="text" placeholder="category name"  className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#E6612A]" required />
                     
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Brand</span>
                        </label>
                        <input type="text" {...register("brand")} placeholder="product brand name"  className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#E6612A]" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Price</span>
                        </label>
                        <input type="text" {...register("price")} placeholder="$$$" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#E6612A]" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Stock</span>
                        </label>
                        <input type="number" {...register("stock")} placeholder="stock quantity" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#E6612A]" required />
                    </div>
                </div>
                <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Featured Image</span>
                        </label>
                        <input type="text" {...register("image")} placeholder="Featured Image" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#E6612A]" required />
                    </div>
                 <input type="submit" value="Create Product" className="btn text-white bg-[#E6612A] hover:bg-[#FF3811] w-full mt-8" />

            </form>
        </div>
    </section>
    );
};

export default AddProduct;