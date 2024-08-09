import React from 'react'
import RatingBox from './RatingBox'
import ReviewBox from './ReviewBox'

const CustomerReview = () => {
  return (
    <div className='max-w-screen-xl py-4 mx-auto h-fit' >
      <div className='max-w-4xl px-4'>
        <h1 className='font-bold text-4xl' >Customer Review</h1>
        <RatingBox/>
        <ReviewBox/>
      </div>
    </div>
  )
}

export default CustomerReview
