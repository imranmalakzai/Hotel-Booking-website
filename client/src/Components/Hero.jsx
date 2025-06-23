import React from 'react'
import { assets, cities } from '../Assets/assets'

function Hero() {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24px text-white bg-[url("/src/Assets/heroImage.png")] bg-no-repeat bg-cover h-screen'>
      <p className='mt-20 rounded-full bg-[#49B9FF]/50 p-1'>The Unlimited Hotel Experience</p>
      <h1 className='font-[sans] text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bld md:font-extrabold max-w-xl mt-4'>Discover your perfect Gateway Destination</h1>
      <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalleled luxury and comfort await at the wold's most exclusive hotels and resorts. Start Your  Journey today</p>
    <form className='bg-white border mt-8 text-gray-500 rounded-lg px-6 py-4   flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

        <div>
            <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="calenderIcon" className='h-4'/>
                <label htmlFor="destinationInput">Destination</label>
            </div>
            <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5
                   text-sm  outline-none" placeholder="Type here" required />
            <datalist id='destinations'>
              {cities?.map((city,index) => (<option value={city} key={index} />))}
            </datalist>
        </div>

        <div>
            <div className='flex items-center gap-2'>
                 <img src={assets.calenderIcon} alt="calender" className='h-4' />
                <label htmlFor="checkIn">Check in</label>
            </div>
            <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
        </div>
        <div>
            <div className='flex items-center gap-2'>
                 <img src={assets.calenderIcon} alt="checkout" className='h-4' />
                <label htmlFor="checkOut">Check out</label>
            </div>
            <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
        </div>

        <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
            <label htmlFor="guests">Guests</label>
            <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
        </div>

        <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
             <img src={assets.searchIcon} alt="search_icon" className='h-6' />
           <span>Search</span>
        </button>
    </form>
  </div>
  )
}

export default Hero