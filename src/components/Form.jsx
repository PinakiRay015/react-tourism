import React from 'react'
import { formTags } from '../constants'
const Form = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-4 h-fit' >
      <div className='max-w-4xl px-4'>
        <h1 className='font-bold text-4xl' >Leave a Reply</h1>
        <p className='pt-3 text-gray-700' >Your email address will not be published. Required fields are marked <span className='text-red-600' >*</span></p>
        <secion className="grid grid-cols-3 py-5 gap-5" >
            {formTags.map((Element , id)=>(
                <p className='text-sm font-semibold text-gray-600' key={id} >{Element}</p>
            ))}
        </secion>
        <form className='grid grid-cols-2 gap-3 w-[80%]' action="submit">
            <input className='border px-4 py-2 rounded-lg outline-none ring-1 ring-zinc-200 focus:ring-orange-600' type="text" placeholder='Let us know your name'/>
            <input className='border px-4 py-2 rounded-lg outline-none ring-1 ring-zinc-200 focus:ring-orange-600' type="email" placeholder='Your email here'/>
            <input className='col-span-2 border px-4 py-2 rounded-lg outline-none ring-1 ring-zinc-200 focus:ring-orange-600' type="title" placeholder='Title goes here'/>
            <textarea className='col-span-2 border px-4 py-2 rounded-lg outline-none ring-1 ring-zinc-200 focus:ring-orange-600 h-32' placeholder='Comment' ></textarea>
            <button className='bg-orange-600 w-fit px-6 py-3 text-white font-light my-1 rounded' >Post a comment</button>
        </form>
      </div>
    </div>
  )
}

export default Form
