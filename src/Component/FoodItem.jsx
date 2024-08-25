import React from "react";
import { useEffect, useState } from "react";

function FoodItem() {
  const [foodData, setFoodData] = useState([]);
  const [val,setVal] = useState(0);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    // console.log(result?.data);
    setFoodData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }

  function handlePrev(){
    // console.log(val);
    val<=0 ? "" : setVal((prev)=> prev - 49)
  }
  function handleNext(){
    // console.log(val);
    val>=196 ? "" :setVal((prev)=> prev + 49)
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
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
    </>
  );
}

export default FoodItem;
