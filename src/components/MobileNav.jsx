import React from 'react'
import { GrMapLocation } from "react-icons/gr";
const MobileNav = () => {
  return (
    <div className='w-full h-fit fixed sm:hidden bottom-0 z-10' >
      <div className='max-w-screen-xl h-24 bg-black px-3'>
        <nav className='flex justify-between items-center h-[100%]' >
            <div className='text-white flex flex-col items-center' >
                <i className='text-4xl' ><GrMapLocation/></i>
                <p>Destinations</p>
            </div>
            <div className='text-white flex flex-col items-center'>
            <i className='text-4xl' ><GrMapLocation/></i>
            <p>Destinations</p>
            </div>
            <div className='text-white flex flex-col items-center'>
            <i className='text-4xl' ><GrMapLocation/></i>
            <p>Destinations</p>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
