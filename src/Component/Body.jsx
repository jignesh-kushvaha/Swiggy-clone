import React from "react";
import FoodItem from "./FoodItem";
import TopRestaurant from "./TopRestaurant";

function Body() {
  return (
    <div className="w-full justify-center">
      <div className="w-[70%] mt-3 mx-auto border-b-2 pb-7 overflow-hidden">
        <FoodItem />
        <TopRestaurant />
      </div>
    </div>
  );
}

export default Body;
