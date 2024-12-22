import { GridLoader } from "react-spinners";
 

const Spinner = () => {
 
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <GridLoader
            color='#F97316'
            size={50}
            loading={true}
             

            />
        </div>
    );
};

export default Spinner;