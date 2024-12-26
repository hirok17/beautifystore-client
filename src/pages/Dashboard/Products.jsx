import Spinner from "@/component/Loder/Spinner";
import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const Products = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?email=${user?.email}`)
            console.log(res.data);
            return res.data;

        }
    })
    if (isLoading) return <Spinner></Spinner>
    return (
        <section className="mt-12">
            {
                products.length > 0 ?<>
                           <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((item, index) => <>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.price.toFixed(2)}</td>
                                   
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
                </>
                :
                <><h2>You Have no product</h2></>
            }
         
        </section>
    );
};

export default Products;