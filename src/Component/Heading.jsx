import React from 'react'

function Heading() {
  return (
    <div className='w-full shadow-md h-20 flex justify-center items-center'>
      <div className='w-[80%] flex justify-between'>
        {/* logo side */}
        <div className='flex'>
          <img className='w-24' src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="logo" />
          <div className="flex items-center gap-3">
            <p className='pb-1 border-b-2 border-black font-bold hover:text-[rgba(236,100,36,1)] hover:border-[#ec6424]'>Other</p>
            <i class="fi fi-br-angle-small-down text-[rgba(236,100,36,1)] mt-1 text-3xl font-bold"></i>
          </div>  
        </div>

        {/* navbar */}
        <div className='flex items-center gap-7'>
          <div className='flex gap-2'>
            <i class="fi fi-rr-shopping-bag"></i>
            <p>Swiggy Corporate</p>
          </div>
          <div className='flex gap-2'>
          <i class="fi fi-rr-search"></i>
            <p>Search</p>
          </div>
          <div className='flex gap-2'>
          <i class="fi fi-rr-badge-percent"></i>
            <p>Offers</p>
          </div>
          <div className='flex gap-2'>
            <i class="fi fi-rr-info"></i>
            <p>Help</p>
          </div>
          <div className='flex gap-2'>
          <i class="fi fi-rs-user"></i>
            <p>Sign In</p>
          </div>
          <div className='flex gap-2'>
          <i class="fi fi-rs-shopping-cart"></i>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
