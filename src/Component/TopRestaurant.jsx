import React from "react";
import { useState, useEffect } from "react";
function TopRestaurant() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [val, setVal] = useState(0);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    console.log(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantData(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  function handlePrev() {
    val <= 0 ? "" : setVal((prev) => prev - 49);
  }
  function handleNext() {
    val >= 441 ? "" : setVal((prev) => prev + 49);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
            <div className="min-w-[16rem] h-[12rem] mt-1">
              <img
                className="w-full h-full rounded-2xl object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,w_660/${info.cloudinaryImageId}`}
                alt="item"
              />
            </div>
            <h2 className="font-bold font-size-[18px] mt-[12px] ml-12px">{info.name}</h2>
            <div className="flex items-center gap-2">
              <p>{info.avgRating}</p>
              <span>.</span>
              <p>{info.sla.slaString}</p>
            </div>
            <div>
                <p>{(info.cuisines).join(',')}</p>
                <p>{info.locality}</p>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TopRestaurant;
