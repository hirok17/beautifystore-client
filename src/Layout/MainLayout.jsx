import { Outlet } from "react-router";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
// import Navbar from "../component/header/Navbar";

const MainLayout = () => {
    return (
        <div>
           <Header />
            <div className="">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;