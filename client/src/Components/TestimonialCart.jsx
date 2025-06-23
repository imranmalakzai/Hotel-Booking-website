import React from 'react'
import Stars from '../Utils/Stars'

function TestimonialCart({customerName,profession,image,rating,feedback}) {
  return (
    <div className="mb-5 text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 cursor-pointer hover:scale-104  transition">
           <div className="flex flex-col items-center px-5 py-4 relative">
               <img className="h-24 w-24 absolute -top-14 rounded-full" src={image} alt="userImage2"/>
               <div className="pt-8 text-center" >
                   <h1 className="text-lg font-medium text-gray-800">{customerName}</h1>
                   <p className="text-gray-800/80">{profession}</p>
               </div>
           </div>
           <p className="text-gray-500 px-6 text-center">{feedback}</p>
           <div className="flex justify-center pt-4">
               <Stars />
           </div>
       </div>
  )
}

export default TestimonialCart