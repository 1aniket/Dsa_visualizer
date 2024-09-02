import React from "react";
import toast, { ToastBar } from "react-hot-toast";
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const notifyS = () =>
  toast.success("The number found", { position: "top-center", icon: "🎉" });
const notifyW = () =>
  toast.error("The number not found", { position: "top-center" });
async function updateBoxProperty(nums, setNums, setBtnState, target ) {

  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    await delay(500)
    
    

    if (nums[i].number == target) {
      console.log(nums[i].number);
      setNums((prevNums) =>
        prevNums.map((box) =>
          box.id === nums[i].id ? { ...box, property: "succeess" } :{...box, property: "dim"}
        )
      );
      notifyS();
      return null;
    } else {
      setNums((prevNums) =>
        prevNums.map((box) =>
          box.id === nums[i].id ? { ...box, property: "running" } : box
        )
      );
    }
  }

  setNums((prevNums) =>
    prevNums.map((box) => ({
      ...box,
      property: "wrong",
    }))
  );

  
  notifyW();
}

const LinearSearch = (nums, setNums, setBtnState, target) => {
  updateBoxProperty(nums, setNums, setBtnState, target);
};
export default LinearSearch;
