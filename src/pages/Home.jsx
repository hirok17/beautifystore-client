import Carousel from "../component/home/Carousel";

const Home = () => {
   const api= import.meta.env.VITE_SOME_KEY;
   console.log('hello', api);
    return (
        <div className="mt-6">
             <Carousel></Carousel>
          
        </div>
    );
};

export default Home;