
import Carousel from "../component/home/Carousel";
import Features from "../component/home/Features";
import Testimonial from "../component/home/testimonial";

const Home = () => {
 
    return (
        <div className="mt-6">
             <Carousel></Carousel>
             <Features />
            <Testimonial />
           
          
        </div>
    );
};

export default Home;