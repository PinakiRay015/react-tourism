import React from 'react'
import { facilities , goods } from '../constants'
const Packages = () => {
  return (
      <div className='max-w-4xl py-3 px-4' >
        <h1 className='font-bold text-4xl pb-3' >What's Included</h1>
        <div className='flex gap-[5rem] px-4'>
            <ul>
                {facilities.map((Element , id)=>(
                    <li className='list-disc' key={id} >{Element}</li>
                ))}
            </ul>

            <ul>
                {goods.map((Element , id)=>(
                    <li className='list-disc' key={id} >{Element}</li>
                ))}
            </ul>
        </div>
      </div>
  )
}

export default Packages
