import React from "react";
import Footer from "./CabinetFooter";
import { Link } from 'react-router-dom';

const History = () => {
    return(
        <div className="flex flex-col flex-1 w-full h-full md:max-w-[438px] px-2 pt-2 m-auto">
            <div className="m-auto ">
              <h3 className="header-text font-semibold text-[20px]">История</h3>  
            </div>
                
            <Footer/>
        </div>
    )
}

export default History;