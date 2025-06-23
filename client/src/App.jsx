import { useLocation } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home.jsx'
import Footer from './Components/Footer.jsx'
import AllRooms from './Pages/AllRooms.jsx'
import RoomDetails from './Pages/RoomDetails.jsx'
import MyBooking from './Pages/MyBooking.jsx'
import HotelReg from './Components/HotelReg.jsx'
import Layout from './Pages/HotelOwner/Layout.jsx'
import Dashboard from './Pages/HotelOwner/Dashboard.jsx'
import AddRoom from './Pages/HotelOwner/AddRoom.jsx'
import ListRoom from './Pages/HotelOwner/ListRoom.jsx'

function App() {

  //checking the path
  const isOwnerPath = useLocation().pathname.includes("owner")


  return (
    <div>
      {!isOwnerPath && (<Navbar />)}
     {false && ( <HotelReg />)}
      <div className='min-h-[75vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='/my-bookings' element={<MyBooking />} />
        <Route path='/owner' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='add-room' element={<AddRoom />} />
        <Route path='list-room' element={<ListRoom />} />
        </Route>
      </Routes>
      </div>
      {!isOwnerPath && (<Footer />)}
    </div>
  )
}

export default App