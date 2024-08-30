import React from "react";
import { useState, useEffect } from "react";
import ResturantData from "./ResturantData";
function TopRestaurant({ restaurantData }) {
  const [val, setVal] = useState(0);

  function handlePrev() {
    val <= 0 ? "" : setVal((prev) => prev - 49);
  }
  function handleNext() {
    val >= 441 ? "" : setVal((prev) => prev + 49);
  }

  return (
    <div className="border-b-2 mt-10 pb-12">
      <div className="flex justify-between mt-1">
        <h3 className="font-extrabold text-2xl my-2 px-1">Top Resturants</h3>
        <div className="flex items-center gap-2">
          <div
            onClick={handlePrev}
            className={`${
              val <= 0 ? "bg-gray-100" : "bg-gray-300"
            } rounded-full cursor-pointer h-8 w-8 flex justify-center items-center pt-1`}
          >
            <i
              className={`fi fi-rs-arrow-left ${
                val <= 0 ? "text-gray-400" : "text-black"
              }`}
            ></i>
          </div>
          <div
            onClick={handleNext}
            className={`${
              val >= 441 ? "bg-gray-100" : "bg-gray-300"
            } rounded-full cursor-pointer h-8 w-8 flex justify-center items-center pt-1`}
          >
            <i
              className={`fi fi-rs-arrow-right ${
                val >= 441 ? "text-gray-400" : "text-black"
              }`}
            ></i>
          </div>
        </div>
      </div>

      <div
        style={{ translate: `-${val}%` }}
        className={`flex duration-500 gap-8 px-1`}
      >
       {restaurantData.map(({ info , cta:{link}}) => (
            <ResturantData {...info} link={link}/>
        ))}
      </div>
    </div>
  );
}

export default TopRestaurant;
