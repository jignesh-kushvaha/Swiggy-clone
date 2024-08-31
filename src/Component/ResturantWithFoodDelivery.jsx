import React from "react";
import ResturantData from "./ResturantData";


function ResturantWithFoodDelivery({ restaurantData }) {
  return (
    <div className="border-b-2 mt-10 pb-9">
      <div className="flex justify-between mt-1">
        <h3 className="font-extrabold text-2xl my-2 px-1">
          Restaurants with online food delivery{" "}
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-8 pl-1 pr-5">
        {restaurantData.map(({ info , cta:{link}} ,i) => (
            <ResturantData key={i} {...info} link={link}/>
        ))}
      </div>
    </div>
  );
}

export default ResturantWithFoodDelivery;
