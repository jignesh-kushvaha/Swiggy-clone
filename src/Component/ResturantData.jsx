//use by ResturantWithFoodDelivery and TopResturant components.

import React from "react";
import {Link} from 'react-router-dom';

function ResturantData(info) {
  console.log(info.link.split('/').at(-1));
  return (
    <Link to={`ResturantMenu/${info.link.split('/').at(-1)}`} className="hover:scale-95 duration-100 cursor-pointer">
      <div className={`min-w-[17rem] h-[11rem] mt-2 relative`}>
        <img
          className="w-full h-full rounded-2xl object-cover shadow shadow-gray-300 "
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,w_660/${info.cloudinaryImageId}`}
          alt="item"
        />
        <div className="w-full h-full rounded-2xl bg-gradient-to-t from-black from-2% to-transparent to-30% absolute top-0"></div>
        <div className="absolute bottom-0 text-[#ffffffeb] px-3 py-2 font-extrabold text-[18px]">
          {info?.aggregatedDiscountInfoV3?.header}
          {info?.aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>

      <div className="pl-2">
        <h2 className="font-bold text-[18px] mt-[12px] ml-12px line-clamp-1">
          {" "}
          {info.name}
        </h2>
        <div className="flex h-7 items-center font-medium gap-0.5">
          <i className="fi fi-sr-circle-star text-green-600 mt-1.5"></i>
          <p>{info.avgRating}</p>
          <sup className="text-[30px] mt-3 text-2xl">.</sup>
          <p>{info.sla.slaString}</p>
        </div>
        <div className="text-gray-500 text-semibold">
          <p className="line-clamp-1">{info.cuisines.join(", ")}</p>
          <p>{info.locality}</p>
        </div>
      </div>
    </Link>
  );
}

export default ResturantData;
