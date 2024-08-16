import React, { useEffect, useState } from "react";
import "./Searching.css";
import { Createbox } from "./Createbox";
import GenerateRandomNumber from "./GenerateRandomNumber";
import GetKey from "./Getkey";
import LinearSearch from "./LinearSearch";
import toast, { Toaster } from "react-hot-toast";

const Searching = () => {
  const handleChange = (val) => {
    setNumberOfBoxes(Number(val));
    GenerateArray(val);
    setBtnState(false);
  };

  const GenerateArray = (numberOfBoxes) => {
    const nums = Array.from({ length: numberOfBoxes }, (_, i) => ({
      id: GetKey(),
      number: GenerateRandomNumber(),
      property: "normal",
    }));
    setNums(nums);
  };

  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [nums, setNums] = useState([]);
  const [keys, setKeys] = useState([]);
  const [btnState, setBtnState] = useState(false);
  const [target, setTarget] = useState(0);
  const [lsChecked, setLsChecked] = useState();

  return (
    <div className="searching-container">
      <Toaster position="top-right" />
      <div className="row1">
        <div className="left-side">
          <div className="searching-options">
            <div className="linear-search option">
              <input
                type="checkbox"
                name="LS"
                className="ls-btn"
                onChange={(e) => {
                  setLsChecked(e.target.checked);
                  console.log(lsChecked);
                }}
              />
              <span>Linear Search</span>{" "}
            </div>
            <div className="binary-search option">
              <input
                type="checkbox"
                name="BS"
                className="bs-btn"
                onChange={(e) => {
                  setLsChecked(e.target.checked);
                  console.log(lsChecked);
                }}
              />
              <span>Binary Search</span>{" "}
            </div>
          </div>
          <div className="search-range">
            <p>Numbers of squares</p>
            <input
              type="range"
              value={numberOfBoxes}
              min={2}
              max={35}
              name="search-range"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="right-side">
          <p>
            Time Complexity : <span className="value"> O(N)</span>
          </p>
          <p>
            Space Complexity : <span className="value"> O(1)</span>
          </p>
        </div>
      </div>
      <div className="row2">
        <div className="input">
          <div className="searchbar">
            <input
              type="number"
              name="num"
              placeholder="Search number here.."
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>

          <div className="btn">
            <button
              disabled={btnState}
              onClick={() => {
                return lsChecked && target
                  ? LinearSearch(nums, setNums, setBtnState, target)
                  : toast.error("Select an Option Or enter the target", {
                      position: "top-center",
                    });
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="box-area">
          {numberOfBoxes > 0 ? (
            <Createbox array={nums} />
          ) : (
            <h1>Move Slider To generate Box</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searching;
