import React from 'react'
import { FaAngular } from "react-icons/fa";
const TechnologyStack = () => {
    return (
       <div className='px-3 py-12 border rounded-lg'>
         <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-3xl font-semibold'>Technology Stack</h1>
                <p>Our technology stack empowers us to create advanced web solutions that drive innovation and deliver results.</p>
            </div>
            <div className='mt-3'>
                <h1 className='text-2xl text-[#2e5090] font-extralight'>Frontend Programming Languages</h1>
                <div className='border bg-[#2e5090]'>
                <{icon} className='text-5xl text-[white]' />
                </div>
            </div>
       </div>
    )
}

export default TechnologyStack