import React from 'react'
import { teamAll, teampic } from '../assets'

const TopSectionComponent = () => {
  return (
<>
<div  className='px-20 py-12'>

  <div className='grid grid-cols-12 space-x-9 '>
    <div className='col-span-6'>
        <div className='flex flex-col gap-10 mt-4 ml-5'>
            <h1 className='text-3xl font-medium'>Team</h1>
            <h2 className='text-5xl font-bold'>About Our <span className='text-[#0A6EB7]'>Team</span></h2>
            <p className='text-3xl'>We're a team of makers, thinkers, and explorers. We approach work and play with curiosity and experimentation, using what we learn to create meaningful digital products that connect with people, just like you.</p>
        </div>
    </div>
        <div className='col-span-6 relative'>
            <div  className='absolute z-50  -right-7 top-[8%] bg-red-500 w-14 h-14 rounded-full '>
            </div>
          <img src={teampic} alt="" className='h-[80vh] w-full rounded-3xl' />
          <div  className='absolute z-50 bottom-7 -left-7 bg-blue-950 w-14 h-14 rounded-full '>
          </div>
        </div>
  </div>
  <div className='flex flex-col items-center justify-center gap-4 py-12'>
    <h1 className='text-5xl font-semibold'>Our <span className='text-[#0A6EB7]'>Team</span></h1>
    <h2 className='text-2xl'>This is our team, a lot of smiling happy people who work hard to empower your teams.</h2>
   <div className='border-b-4 text-[#0A6EB7] h-3 w-[15%]'>
   </div>
   <img src={teamAll} alt="" />
  </div>
</div>
</>
  )
}

export default TopSectionComponent
