import FoodItem from "./FoodItem";
import TopRestaurant from "./TopRestaurant";
import { useState,useEffect } from "react";

function Body() {
  const [foodData, setFoodData] = useState([]);
  const [topRestaurantData,setTopRestaurantData] = useState([]);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();

    setFoodData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    console.log( result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
    setTopRestaurantData(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full justify-center">
      <div className="w-[75%] mt-3 mx-auto overflow-hidden">
        <FoodItem foodData={foodData}/>
        <TopRestaurant restaurantData={topRestaurantData}/>
      </div>
    </div>
  );
}

export default Body;
