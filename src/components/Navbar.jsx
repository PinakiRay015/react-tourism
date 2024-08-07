import React from 'react'
import { brandLogo } from '../utils'
import { navitems } from '../constants'
const Navbar = () => {
  return (
    <div className='w-full h-fit border-b' >
      <div className='max-w-screen-xl h-[10vh] mx-auto flex items-center justify-between px-3' >
        <img className='cursor-pointer' src={brandLogo} alt="" />
        <nav className='hidden sm:flex gap-6 items-center' >
            {navitems.map((Element , id)=>(
                <p className='text-black text-md font-semibold cursor-pointer' key={id} >{Element}</p>
            ))}

            <div className='buttons flex gap-6'>
                <button className='border border-[#EB662B] px-2 py-1 rounded-[200px] text-[#EB662B] font-semibold' >Sign up</button>
                <button className='bg-[#EB662B] rounded-[200px] text-white px-2 py-1 font-semibold' >Log in</button>
            </div>

        </nav>
      </div>    
    </div>
  )
}

export default Navbar
