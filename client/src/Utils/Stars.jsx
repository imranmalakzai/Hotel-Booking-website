import React from 'react'
import { assets } from '../Assets/assets'

function Stars() {
  return (
     <div className="flex gap-0.5">
                 {Array(5).fill().map((_,index) => (
                   <img src={assets.starIconFilled} alt="imageURL" key={index} height={16} width={16} />
                 ))}
               </div>
  )
}

export default Stars