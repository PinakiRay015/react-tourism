import React from 'react'
import Timeline from './Timeline'
const TourPlan = ({place}) => {
  return (
    <div className='w-full h-fit' >
        <div className='max-w-screen-xl mx-auto px-4 py-3' >
        <h1 className='font-bold text-4xl' >Tour plan</h1>
        <Timeline/>
        </div>
    </div>
  )
}

export default TourPlan
