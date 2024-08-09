import React from 'react'
import Timeline from './Timeline'
const TourPlan = ({place}) => {
  return (
    <div className='max-w-screen-xl py-4 mx-auto h-fit' >
        <div className='max-w-4xl px-4 py-3' >
        <h1 className='font-bold text-4xl' >Tour plan</h1>
        <Timeline/>
        </div>
    </div>
  )
}

export default TourPlan
