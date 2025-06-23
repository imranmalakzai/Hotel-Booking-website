import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets } from '../../Assets/assets'

function AddRoom() {

  const [images,setImages] = useState({
    1:null,
    2:null,
    3:null,
    4:null
  })

  const [input,setInput] = useState({
    roomType:"",
    pricePerNight:0,
    Amenities: {
      "Free Wifi" :false,
      "Free BreakFast" : false,
      "Room Service": false,
      "Mountain Views" : false,
      "Pool Access" : false 
    }
  })

  return (
    <form action="">
      <Title align={"left"} title={"Add Room"} subTitle={"Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."} />
        {/* - - - - Uload Area for the images - - - - - -- -  */}
        <p className='text-gray-800 mt-10'>Images</p>

        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
          {Object.keys(images)?.map((key) => (
            <label htmlFor={`roomImage${key}`} key={key}>
              <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" className='max-h-13 cursor-pointer opacity-80' />
              <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={(e)=>setImages({...images,[key]:e.target.files[0]})} />
            </label>
          )) }
        </div>

        <div className='w-fll flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='flex-1 max-w-48'>
              <p className='text-gray-800 mt-4'>
                Room Types
              </p>
              <select value={input.roomType} onChange={(e)=> setInput({...input,roomType:e.target.value})} className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full' required>
                <option value="">Select Room Types</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Luxury Room">Luxury Room</option>
                <option value="Family suite">Family Suite</option>
              </select>
            </div>

            <div>
                <p className='mt-4 text-gray-800'>Price <span className='text-xs'>/Night</span></p>
                <input type="number" placeholder='0'  className='border border-gray-300 mt-1 rounded p-2 w-24' value={input.pricePerNight} onChange={(e)  => setInput({...input,pricePerNight : e.target.value})} />
            </div>
        </div>

        <p className='mt-4 text-gray-800'>Amenities</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
            {
              Object.keys(input.Amenities).map((amenities,index) => (
                <div key={index} className='flex items-center gap-0.5'>
                  <input type="checkbox" id={`amenities${index + 1}`} checked={input.Amenities[amenities]} onChange={(e) =>setInput({...input,Amenities:{...input.Amenities,[amenities]: !input.Amenities[amenities]}})} />
                  <label htmlFor={`amenities${index + 1}`}>{amenities}</label>
                </div>
              ))
            }
        </div>
            <button className='bg-blue-500 text-white px-8 py-2 rounded mt-8 cursor-pointer'>Add Room</button>
    </form>
  )
}

export default AddRoom