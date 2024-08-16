import React from "react";
import "./Homedisplay.css";

const Homedisplay = () =>{
    return (
        <div className="homedisplay-container">
            <p className="title">Welcome to the DSA Vizualizer</p>
            <p className="tagline">Here you can see the visiulization of the following algorithms.</p>
            <ul className="list">
                <li className="list-item subtitle">Searching
                <ul>
                    <li className="list-item">
                       linear search
                       
                    </li>
                    <li className="list-item">
                       Binary search
                    </li>
                </ul>
                </li>
                <li className="list-item subtitle">Sorting
                <ul>
                    <li className="list-item">
                        Bubble Sort
                    </li>
                    <li className="list-item">
                        Quick Sort
                    </li>
                </ul>
                </li>
            </ul>
        </div>
    )
}
export default Homedisplay;