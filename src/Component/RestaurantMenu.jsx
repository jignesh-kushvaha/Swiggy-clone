import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom';

function RestaurantMenu() {
    let {id} = useParams();
    console.log(id.split("-").at(-1).replace(/\D/g, "")); 
    id = id.split("-").at(-1).replace(/\D/g, "");
    async function fetchMenuData() {
      let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
      let res = await data.json();
      console.log(res);
    }

    useEffect(()=>{
      fetchMenuData();
    },[]);
  return (
    <div>
        Resturant - {id}
    </div>
  )
}

export default RestaurantMenu;
