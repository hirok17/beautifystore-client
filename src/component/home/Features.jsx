import useProducts from "../../Hooks/useProducts";
import ProductCart from "../shopPage/ProductCart";

const Features = () => {
    const [products] =useProducts();
    const items =products.slice(0, 8);
    console.log(items);
    return (
      <section className="pb-5">
            <h2 className="text-center text-3xl font-bold mt-11 mb-4"> Featured products</h2>
          <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 px-4">
            {
                items.map(product=><ProductCart key={product._id} product={product}></ProductCart>)
            }
        </div>
      </section>
    );
};

export default Features;