import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resturantInfo, setRestaurantInfo] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [val, setVal] = useState(0);

  let { id } = useParams();

  async function fetchMenuData() {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${id
        .split("-")
        .at(-1)
        .replace(/\D/g, "")}&catalog_qa=undefined&submitAction=ENTER`
    );
    let res = await data.json();

    setRestaurantInfo(res?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    let filterMenuData =
      (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (data) => data?.card?.card?.itemCards || data?.card?.card?.categories
      );
    // console.log(filterMenuData);

    setMenuData(filterMenuData);
  }

  function handlePrev() {
    val <= 0 ? "" : setVal((prev) => prev - 46);
  }
  function handleNext() {
    val >= 138 ? "" : setVal((prev) => prev + 46);
  }

  function DiscountComponent({ data: { info } }) {
    return (
      <div className="flex min-w-[350px] p-3 border-2 rounded-[20px] gap-2">
        <img
          className="w-14 h-14"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${info.offerLogo}`}
          alt=""
        />
        <div>
          <h2 className="font-bold text-[18px]">{info.header}</h2>
          <p className="font-bold text-sm text-[#02060c73] ">
            {info.description}
          </p>
        </div>
      </div>
    );
  }

  function MenuDataComponent({ card }) {
    let temp_togg = false;
    if (card["@type"]) {
      temp_togg = true;
    }
    // console.log(card);

    const [isOpen, setIsOpen] = useState(temp_togg);

    function toggleDropDown() {
      setIsOpen((prev) => !prev);
    }

    if (card.itemCards) {
      const { title, itemCards } = card;
      return (
        <>
          <div>
            <div
              className="flex justify-between mt-5 p-3 cursor-pointer"
              onClick={toggleDropDown}
            >
              <h1
                className={"font-bold text-" + (card["@type"] ? "xl" : "base")}
              >
                {title} (<span>{itemCards.length}</span>)
              </h1>
              <i
                className={
                  `font-bold text-2xl fi fi-rs-angle-small-` +
                  (isOpen ? "up" : "down")
                }
              ></i>
            </div>
            {isOpen && <DetailMenu itemCards={itemCards} />}
          </div>
          <hr
            className={`${
              card["@type"]
                ? "border-[9px] border-[#02060c0d]"
                : "border-[2px] border-[#02060c0d]"
            } mb-4`}
          />
        </>
      );
    } else {
      const { title, categories } = card;
      return (
        <div>
          <h1 className="font-bold text-xl">{title}</h1>
          {categories.map((data) => (
            <MenuDataComponent card={data} />
          ))}
        </div>
      );
    }
  }

  function DetailMenu({ itemCards }) {
    console.log(itemCards);
    
    return (
      <div className="w-full m-5">
        {itemCards.map(({ card: { info:{ name, price, itemAttribute:{vegClassifier}, ratings:{aggregatedRating:{rating, ratingCountV2 }}, description, imageId  } } }) => (
          <>
          <div className="flex justify-between bg-white rounded-xl py-3 px-10">
            <div>
              <p>{vegClassifier}</p>
              <h2>{name}</h2> 
              <p>₹{price}</p>
            </div>
            <div>
              {imageId ? <img className="w-[150px] h-[150px] rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt="" /> : ""}
              <button>ADD</button>
            </div>
          </div>
          <hr className="border-[1px] border-[#02060c15] my-4 w-[90%] mx-auto" />
          </>
        ))}
      </div>
    );
  }

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto pt-6">
        <p className="text-[12px] text-slate-500 cursor-pointer">
          <Link to="/">
            {" "}
            <span className="hover:text-slate-700">home</span>{" "}
          </Link>{" "}
          /{" "}
          <Link to="/">
            {" "}
            <span className="hover:text-slate-700">
              {resturantInfo.city}
            </span>{" "}
          </Link>{" "}
          /{" "}
          <span className="text-slate-700 cursor-default">
            {resturantInfo.name}
          </span>{" "}
        </p>

        <h1 className="font-bold pt-6 text-2xl">{resturantInfo.name}</h1>

        <div className="w-full h-[208px] mt-4 bg-gradient-to-t from-slate-300/70 rounded-b-[2.3rem] ">
          {/* Restaurant-info */}
          <div className="w-[96%] h-[190px] mx-auto mt-4 bg-white border border-black/15 rounded-[1.3rem] ">
            <div className="px-4 pt-1 mb-4">
              <div className="flex items-center gap-1 font-bold text-[16px] h-[28px]">
                <i className="fi fi-sr-circle-star text-green-600 mt-1.5"></i>
                <span>{resturantInfo.avgRating}</span>(
                <span>{resturantInfo.totalRatingsString}</span>)
                <sup className="text-[18px] text-gray-700/70 mt-3 text-2xl">
                  .
                </sup>
                <span>{resturantInfo.costForTwoMessage}</span>
              </div>

              <p className="underline cursor-pointer font-bold text-[#ff5200] text-[14px]">
                {resturantInfo?.cuisines?.join(", ")}
              </p>

              <div className="flex gap-2 mt-2">
                <div className="w-[8px] flex flex-col items-center pt-[10px]">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-[2px] h-[23px] bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>

                <div className="flex flex-col gap-2 font-bold text-base">
                  <p>
                    Outlet{" "}
                    <span className="text-[#02060c99] font-semibold ml-2">
                      {resturantInfo.locality}
                    </span>
                  </p>
                  <p>{resturantInfo?.sla?.slaString}</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="my-3 mx-4">
              <div className="flex gap-1">
                <img
                  className="w-5"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${resturantInfo?.feeDetails?.icon}`}
                  alt=""
                />
                {resturantInfo.length !== 0 && (
                  <span className="text-sm text-gray-400">
                    {resturantInfo?.expectationNotifiers[0]?.enrichedText.replace(
                      /<[^>]>/g,
                      ""
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Discount-section */}
          <div className="border-b-2 px-4 pb-12 overflow-hidden">
            <div className="flex justify-between mt-10">
              <h3 className="font-bold text-[22px] my-2 px-1">Deals for you</h3>
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
                    val >= 138 ? "bg-gray-100" : "bg-gray-300"
                  } rounded-full cursor-pointer h-8 w-8 flex justify-center items-center pt-1`}
                >
                  <i
                    className={`fi fi-rs-arrow-right ${
                      val >= 138 ? "text-gray-400" : "text-black"
                    }`}
                  ></i>
                </div>
              </div>
            </div>

            <div
              style={{ translate: `-${val}%` }}
              className={`flex duration-500 gap-4 px-1`}
            >
              {discountData.map((data, i) => (
                <DiscountComponent key={i} data={data} />
              ))}
            </div>
          </div>

          {/* Menu-section */}
          <div className="w-full mt-8">
            <h1 className="w-full text-center mb-4">MENU</h1>
            <div className="w-full bg-[#02060c0d] text-[#02060c99] leading-[48px] text-center rounded-xl font-semibold relative cursor-pointer">
              Search for dishes
              <i className="absolute text-lg fi fi-rr-search right-4 top-3 text-[#02060c99]"></i>
            </div>

            <div className="w-full">
              {menuData.map(({ card: { card } }, i) => (
                <MenuDataComponent key={i} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
