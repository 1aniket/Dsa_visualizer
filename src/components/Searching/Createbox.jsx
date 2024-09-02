import GenerateRandomNumber from "../Utils/GenerateRandomNumber";
import { generatePath } from "react-router-dom";

export const Createbox = ({ array, setKey }) => {
  const arr = [];
  let a = 0;
 //console.log(array);
  
  return array ? (
    <>
      {array?.map(({ number, id ,property}, index) => {
        return (
          <div className={property +" "+ "box"} key={id}>
            
            <p className="box-text">{number}</p>
          </div>
        );
      })}
    </>
  ):<h1>Something Wrong</h1>;
};
