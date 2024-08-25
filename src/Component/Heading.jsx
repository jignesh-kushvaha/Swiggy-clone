import React from "react";

function Heading() {
  let menu = [
    {
      name: "Swiggy Corporate",
      image: "fi-rr-shopping-bag",
    },
    {
      name: "Search",
      image: "fi-rr-search",
    },
    {
      name: "Offers",
      image: "fi-rr-badge-percent",
    },
    {
      name: "Help",
      image: "fi-rr-info",
    },
    {
      name: "Sign In",
      image: "fi-rr-shopping-bag",
    },
    {
      name: "Cart",
      image: "fi-rr-shopping-cart",
    },
  ];

  return (
    <div className="w-full shadow-md h-20 flex justify-center items-center">
      <div className="w-[85%] flex justify-between">
        {/* logo side */}
        <div className="flex">
          <img
            className="w-24"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt="logo"
          />
          <div className="flex items-center gap-3">
            <p className="pb-1 border-b-2 border-black font-bold hover:text-[rgba(236,100,36,1)] hover:border-[#ec6424]">
              Other
            </p>
            <i className="fi fi-br-angle-small-down text-[rgba(236,100,36,1)] mt-1 text-3xl font-bold"></i>
          </div>
        </div>

        {/* navbar */}
        <div className="flex items-center gap-12 mr-3">
          {menu.map((data, i) => (
            <div key={i} className="flex gap-2 text-gray-600 font-medium">
              <i className={`fi ${data.image} mt-0.5`}></i>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Heading;
