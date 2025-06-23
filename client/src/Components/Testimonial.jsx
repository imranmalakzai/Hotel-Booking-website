import React from 'react'
import Title from './Title'
import {testimonials} from "../Assets/assets.js"
import TestimonialCart from './TestimonialCart.jsx'

function Testimonial() {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
      <Title title={"What Our Guests Say"} subTitle={"Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."}/>
      <div className='flex flex-wrap gap-4 sm:gap-8 mt-16 justify-center '>
        {testimonials.map((one,index) => (
          <TestimonialCart {...one} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Testimonial