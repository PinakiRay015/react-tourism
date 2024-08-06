import React from 'react'
import { FaStar } from "react-icons/fa";
const Ratings = ({rating}) => {
  return (
    <div className='my-2 flex' >
        {[...Array(rating)].map(()=>{
            return(
                <i className='text-amber-300' >
                    <FaStar/>
                </i>
            )
        })}

{[...Array(5-rating)].map(()=>{
            return(
                <i className='text-zinc-800' >
                <FaStar/>
            </i>
            )
        })}
    </div>
  )
}

export default Ratings
