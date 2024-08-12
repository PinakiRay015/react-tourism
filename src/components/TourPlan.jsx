import React from 'react'
import Timeline from './Timeline'
const TourPlan = ({place}) => {
  return (
        <div className='max-w-4xl px-4 py-3' >
        <h1 className='font-bold text-4xl' >Tour plan</h1>
        <Timeline/>
    </div>
  )
}

export default TourPlan
