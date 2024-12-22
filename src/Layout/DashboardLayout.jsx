import { Outlet } from "react-router";
import Sidebar from "../component/Dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="grid lg:grid-cols-12">
           <div className="col-span-2 bg-orange-300 min-h-screen w-full">
                <Sidebar></Sidebar>
           </div>
           <div className="col-span-10 w-full">
                <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashboardLayout;
