import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets, dashboardDummyData } from '../../Assets/assets'

function Dashboard() {
  const [dashboardData,setDashboardData] = useState(dashboardDummyData)


  return (
    <div>
        <Title align={"left"} title={"Dashboard"} subTitle={"Monitor your room listings, track bookings and analyze revenue0all in one place. Stay updated with real-time insights to ensure smoothh operations."} />

        <div className='flex gap-4 my-8'>
            <div className='bg-blue-500/3 border border-blue-500/10 rounded flex p-4 pr-8'>
              {/* - - - - Total Bookings - - - - - - */}
                <img src={assets.totalBookingIcon} alt="total_booking_icon"  className='max-sm:hidden h-10'/>
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500'>Total Booking</p>
                    <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
                </div>
              
            </div>
            <div className='bg-blue-500/3 border border-blue-500/10 rounded flex p-4 pr-8'>
              {/* - - - - Total Revenue - - - - - - */}
                <img src={assets.totalRevenueIcon} alt="total_Revenue_icon"  className='max-sm:hidden h-10'/>
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500'>Total Revenue</p>
                    <p className='text-neutral-400 text-base'>${dashboardData.totalRevenue}</p>
                </div>
            </div>
        </div>
             {/* - - - - - - Recent booking - - - - - - - -  */}
        <div className='text-xl text-blue-950/70 font-medium mb-5'>

            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
                  <table className='w-full'>
                      <thead className='bg-gray-50'>
                          <tr>
                              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                              <th className='py-3 px-4 text-gray-800 font-medium text-center'>payment Status</th>
                          </tr>
                      </thead>
                      <tbody className='text-sm'>
                          {dashboardData.bookings.map((item,index) =>(
                              <tr key={index}>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center '>{item.totalPrice}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300t text-center'>
                                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? "bg-green-200 text-green-600" : "bg-orange-200 text-orange-500"}`}>
                                        {item.isPaid ? "Completed" : "pending"}
                                    </button>
                                </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
            </div>
        </div>

    </div>
  )
}

export default Dashboard