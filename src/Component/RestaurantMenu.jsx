import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';

function RestaurantMenu() {
    const [resturantInfo,setRestaurantInfo] = useState([]);
    const[menuData,setMenuData] = useState([]);
    const[discountData,setDiscountData] = useState([]);
  
    let {id} = useParams();
    id = id.split("-").at(-1).replace(/\D/g, "");

    async function fetchMenuData() {
      let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
      let res = await data.json();

      setRestaurantInfo(res?.data?.cards[2]?.card?.card?.info);
      setDiscountData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
      setMenuData(res?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards);
      console.log(resturantInfo);
    }

    useEffect(()=>{
      fetchMenuData();
    },[]);


  return (
    <div className='w-full'>
        <div className='w-[800px] mx-auto pt-6'>
          <p className='text-[12px] text-slate-500 cursor-pointer' ><Link to="/"> <span className='hover:text-slate-700'>home</span> </Link> / <Link to="/"> <span className='hover:text-slate-700'>{resturantInfo.city}</span> </Link> / <span className='text-slate-700 cursor-default'>{resturantInfo.name}</span> </p>
          <h1 className='font-bold pt-6 text-2xl'>{resturantInfo.name}</h1>
          <div className='w-full h-[208px] mt-4 bg-gradient-to-t from-slate-300/70 rounded-b-[1.7rem] '>
            <div className='w-[95%] h-[190px] mx-auto mt-4 p-4 bg-white border border-black/15 rounded-[1.3rem] '>
              <div className='flex items-center gap-1 font-bold text-[16px]'>
                <i className="fi fi-sr-circle-star text-green-600 mt-1.5"></i>  
                <span>{resturantInfo.avgRating}</span>
                (<span>{resturantInfo.totalRatingsString}</span>)
                <sup className="text-[18px] text-gray-700/70 mt-3 text-2xl">.</sup>
                <span>{resturantInfo.costForTwoMessage}</span>
              </div>

              <p className='underline cursor-pointer font-bold text-[#ff5200] text-[14px]'>{resturantInfo?.cuisines?.join(", ")}</p>

              <div className='flex gap-2  mt-2'>
                  <div className='w-[8px] flex flex-col items-center pt-[10px]'>
                    <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                    <div className='w-[2px] h-[23px] bg-gray-400'></div>
                    <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                  </div>

                  <div className='flex flex-col gap-2 font-bold text-base'>
                    <p>Outlet  <span className='text-gray-400 font-semibold ml-2'>{resturantInfo.locality}</span></p>
                    <p>{resturantInfo?.sla?.slaString}</p>
                  </div>

              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default RestaurantMenu;
