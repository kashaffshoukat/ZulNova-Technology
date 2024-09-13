import React from 'react';
import { blogpic2 } from '../assets'; // Removed blogpic import as it's not used
import Button from './Button'; // Assuming you might want to use this later
import { RiH1 } from 'react-icons/ri'; // Not used in this code

const BlogDetail = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 py-8 md:py-12 gap-8'>
            <div className='flex flex-col gap-5 items-start justify-center'>
                <h1 className='text-2xl md:text-4xl font-semibold text-[#2e5090]'>
                    Transform Your Vision into Reality
                </h1>
                <p className='text-sm md:text-md mb-6'>
                    Skip the local setup headaches. Let our expert team develop your website from start to finish,
                    using cutting-edge tools and best practices. Get your professional site up and running faster!
                </p>
                <div className='flex flex-col md:flex-row gap-4 md:gap-5'>
                    <button className='p-2 bg-[#2e5090] text-white rounded-md'>
                        Talk to Expert Now
                    </button>
                    <button className='p-2 border border-[#2e5090] font-light text-[#2e5090] rounded-md'>
                        Review Web Development Services
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={blogpic2} alt='Blog' className='w-auto h-auto max-w-sm md:max-w-full' />
            </div>
        </div>
    );
};

export default BlogDetail;
