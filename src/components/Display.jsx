import React from "react";
import "./Display.css";
import { Outlet } from "react-router-dom";


const Display  = () =>{

    return(
        
        <div className="display-container">
            <Outlet/>
        </div>
    ) 
}

export default Display;