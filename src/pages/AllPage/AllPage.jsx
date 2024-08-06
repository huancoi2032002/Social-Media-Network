import React from "react";
import Test1 from "../../components/Test/Test1";

const AllPage = () => {
    return(
        <div className="container mx-auto text-white relative">
            <div className="flex justify-between gap-5">
                <div className="flex-grow md:pl-[-30px]  xl:pr-30">
                    <Test1 />
                </div>
                
            </div>
        </div>
    )
}

export default AllPage