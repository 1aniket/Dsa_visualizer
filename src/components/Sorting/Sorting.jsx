import React, { useState } from "react";
import "./Sorting.css";
import CreateBar from "./CreateBar";
import GetKey from "../Utils/Getkey";
import GenerateRandomNumber from "../Utils/GenerateRandomNumber";
import bubbleSort from "./bubbleSort";
import SelectionSort from "./SelectionSort";

const Sorting = () => {
  const [barNumbers, setBarNumbers] = useState(0);
  const [barProperty, setBarProperty] = useState();
  const[comparisons , setComparisons]= useState(0);
  const[bs , setbs]= useState(false);
  const[ss , setSs]=useState(false);

  let time=0;
  const handleChange = (value) => {
    //console.log(value);
    setBarNumbers(Number(value));
    //console.log(barNumbers);
    generateBarProperty(Number(value), setBarProperty);
  };

  const generateBarProperty = (barNumbers, setBarProperty) => {
    console.log(barNumbers);
    const arr = Array.from({ length: barNumbers }, (_, index) => ({
      id: GetKey(),
      height: Number(Math.floor(GenerateRandomNumber() * 2.3)),
      width: "5px",
      color: "normal-bar",
    }));

    setBarProperty(arr);
  };

  return (
    <>
      <div className="sorting-container">
        <div className="row1">
          <div className="left">
          <div className="sorting-options">
            <div className="bubble-sort option">
              <input
                type="checkbox"
                name="BS"
                className="bs-btn"
                onChange={(e) => {
                  setbs(e.target.checked)
                }}
              />
              <span>Bubble Sort</span>{" "}
            </div>
            <div className="selection-sort option">
              <input
                type="checkbox"
                name="SS"
                className="ss-btn"
                onChange={(e) => {
                 setSs(e.target.checked)
                  
                }}
              />
              <span>Selection Sort</span>{" "}
            </div>
          </div>
            <div className="range">
              <span>Number of Bars</span>
              <input
                type="range"
                min={50}
                max={500}
                value={barNumbers}
                onChange={(e) => {
                  
                  handleChange(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="right">
              
          </div>
        </div>
        <div className="row2">
          <div className="display">
            
            <button
            className="sorting-btn"
             onClick={()=>{

              if(bs)
              {
                bubbleSort(barProperty , setBarProperty , time)
              }else if(ss)
              {
                SelectionSort(barProperty , setBarProperty , time)
              }
             }
              
             }
            >
              Start
            </button>
            
            <CreateBar barNumbers={barNumbers} barProperty={barProperty} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;
