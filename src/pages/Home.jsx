import Carousel from "../component/home/Carousel";
import Features from "../component/home/Features";

const Home = () => {
   const api= import.meta.env.VITE_SOME_KEY;
   console.log('hello', api);
    return (
        <div className="mt-6">
             <Carousel></Carousel>
             <Features />
          
        </div>
    );
};

export default Home;