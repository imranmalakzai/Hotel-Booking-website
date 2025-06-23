import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
    <div className='flex h-full'>
      <Sidebar />
      <div className='px-5 py-5'>
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default Layout