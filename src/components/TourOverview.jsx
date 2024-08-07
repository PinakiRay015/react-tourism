import React from 'react'

const TourOverview = ({place}) => {
  return (
    <div className='w-full h-fit my-5'>
      <div className='max-w-screen-xl mx-auto py-10 border-b border-zinc-700' >
        <h1 className='font-bold text-4xl' >Tour overview</h1>
        <div className='w-[55vw] my-5' >
            <p className='leading-7' >{place.about}</p>
            <h3 className='font-semibold text-2xl my-2'>Highlights</h3>
            <ul className='pl-4' >{place.highlights.map((Element , id)=>{
                return(
                    <li className='list-disc' key={id} >{Element}</li>
                )
            })}</ul>
        </div>
      </div>
    </div>
  )
}

export default TourOverview
