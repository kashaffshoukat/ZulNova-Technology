import React from 'react';

const BlogsCustomSliderCard = ({ blogpic, heading1, heading2 }) => {
    return (
        <div className="flex flex-col justify-between bg-[#d3d3d3] rounded h-80 w-full overflow-hidden"> 
            <img src={`https://test.saeedantechpvt.com/${blogpic}`} alt={heading1} className="w-full h-48 object-cover rounded" />
            <div className='p-4'>
                <h2 className="font-bold text-lg mt-2 line-clamp-1">{heading1}</h2> 
                <p className="text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ __html: heading2 }} />
            </div> 
        </div>
    );
};

export default BlogsCustomSliderCard;
