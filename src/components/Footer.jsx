import React from 'react'
import { footerElements } from '../constants'
const Footer = () => {
  return (
    <div className='w-full h-fit bg-[#EB662B0A] py-6 px-4' >
      <div className='max-w-screen-xl mx-auto' >
        <header className='flex justify-between items-center px-8' >
            <h3 className='font-semibold' >Speak to our expert at <span className='text-orange-500' >91-800-453-6744</span></h3>
            <p>Follow Us</p>
        </header>
        <main className='py-16 flex gap-4 justify-between flex-wrap' >
            {footerElements.map((Element , id)=>{
                return(
                    <div key={id} className='max-w-md' >
                    <h3 className='font-semibold capitalize pb-3' >{Element.item}</h3>
                    <ul>
                        {Element.subitems.map((Element , id)=>{
                            return(
                                <p className='py-1 capitalize' key={id} >{Element}</p>
                            )
                        })}
                    </ul>
                </div>
                )
            })}
            <div className='w-1/4' >
                    <h3 className='font-semibold capitalize pb-3' >newsletter</h3>
                    <ul>
                        <p className='py-1'>Subscribe to the free newsletter and stay
                        up to date</p>
                        <input className='my-2 px-4 py-3 text-sm w-full border rounded-md' type="email" placeholder='Your email address'/>
                        <h3 className='font-semibold capitalize pb-3' >mobile apps</h3>
                        <p className='py-1'>iOS App</p>
                        <p className='py-1 capitalize'>android app</p>
                    </ul>
                </div>
        </main>
      </div>
    </div>
  )
}

export default Footer
