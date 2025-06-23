import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../Assets/assets'


function ExclusiveOffers() {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>

      <div className='flex flex-col md:flex-row items-center justify-between w-full'>

        <Title title={"Exclusive Offers"} font={"cursive"} subTitle={"Take advantages of our limited-time offers and special packages to enhance your stay and create unforgettable memories."} align={"left"}/>
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">View All Offers
            <img src={assets.arrowIcon} alt="arrow" className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>
      <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {
          exclusiveOffers.map((item,index) =>(
            <div key={index} className=' group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-2 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${item.image})`}}>
              <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}%Off</p>
              <div>
                <p className='text-2xl font-medium font-[sense]'>{item.title}</p>
                <p>{item.description}</p>
                <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
              </div>
                <button className='group flex item-center gap-2 font-medium cursor-pointer mt-4 mb-5'>
                  View Offer
                  <img src={assets.arrowIcon} alt="arrow_icon" className='invert group-hover:translate-x-1 transition-all' />
                </button>
                <div className='bg-[rgba(72,122,239,0.4)] w-full h-full absolute top-0 left-0 rounded-xl cursor-pointer hidden group-hover:flex transition-all opacity-50 navbar justify-center items-center'>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ExclusiveOffers