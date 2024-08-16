import React from "react";
import "./Sidebar.css";
import {NavLink } from "react-router-dom";

const Sidebar = () =>{

    return(
        
            <div className="sidebar-container">
                <div className="btn"><NavLink to="/searching">Searching</NavLink></div>
                <div className="btn"><NavLink to="/sorting">Sorting</NavLink></div>
                
            </div>
        
    )
}

export default Sidebar;