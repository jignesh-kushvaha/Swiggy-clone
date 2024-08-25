import React from "react";
import { useEffect, useState } from "react";

function FoodItem({foodData}) {
  const [val,setVal] = useState(0);

  function handlePrev(){
    val<=0 ? "" : setVal((prev)=> prev - 49)
  }
  function handleNext(){
    val>=196 ? "" :setVal((prev)=> prev + 49)
  }

  return (
    <div className="border-b-2 pb-7 ">
      <div className="flex justify-between">
        <h3 className="font-extrabold text-2xl my-2 px-1">What's on your mind?</h3>
        <div className="flex items-center gap-2">
          <div onClick={handlePrev} className={`${val<=0 ? "bg-gray-100" : "bg-gray-300"} rounded-full cursor-pointer h-8 w-8 flex justify-center items-center pt-1`}>
          <i className={`fi fi-rs-arrow-left ${val<=0 ? "text-gray-400" : "text-black"}`}></i>
          </div>
          <div onClick={handleNext} className={`${val>=196 ? "bg-gray-100" : "bg-gray-300"} rounded-full cursor-pointer h-8 w-8 flex justify-center items-center pt-1`}>
          <i className={`fi fi-rs-arrow-right ${val>=196 ? "text-gray-400" : "text-black"}`}></i>
          </div>
        </div>
      </div>
      <div style={{translate:`-${val}%`}} className={`flex duration-500`}>
        {foodData.map((item) => (
          <img
            key={item.id}
            className="w-40"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
            alt="item"
          />
        ))}
      </div>
    </div>
  );
}

export default FoodItem;
