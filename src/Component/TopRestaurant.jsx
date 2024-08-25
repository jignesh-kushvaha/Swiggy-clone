import React from "react";
import { useState, useEffect } from "react";
function TopRestaurant({ restaurantData }) {
  const [val, setVal] = useState(0);

  function handlePrev() {
    val <= 0 ? "" : setVal((prev) => prev - 49);
  }
  function handleNext() {
    val >= 441 ? "" : setVal((prev) => prev + 49);
  }

  return (
    <div className="border-b-2 mt-7 pb-9">
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
        className={`flex duration-500 gap-8`}
      >
        {restaurantData.map(({ info }) => (
          <div key={info.id}>
            <div className="min-w-[17rem] h-[12rem] mt-2 relative">
              <img
                className="w-full h-full rounded-2xl object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,w_660/${info.cloudinaryImageId}`}
                alt="item"
              />
              <div className="w-full h-full rounded-2xl bg-gradient-to-t from-black from-2% to-transparent to-30% absolute top-0"></div>
              <div className="absolute bottom-0 text-[#ffffffeb] px-3 py-2 font-extrabold text-[18px]">
                {info.aggregatedDiscountInfoV3.header}{" "}
                {info.aggregatedDiscountInfoV3.subHeader}
              </div>
            </div>

            <div className="pl-2">
              <h2 className="font-bold text-[18px] mt-[12px] ml-12px leading-4">
                {info.name}
              </h2>
              <div className="flex h-7 items-center font-medium gap-0.5">
                <i class="fi fi-sr-circle-star text-green-600 mt-1.5"></i>
                <p>{info.avgRating}</p>
                <sup className="text-[30px] mt-3 text-2xl">.</sup>
                <p>{info.sla.slaString}</p>
              </div>
              <div className="text-gray-500 text-semibold">
                <p>{info.cuisines.join(", ")}</p>
                <p>{info.locality}</p>
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRestaurant;
