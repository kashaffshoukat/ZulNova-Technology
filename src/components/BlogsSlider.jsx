import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogsCustomSliderCard from './page/BlogsCustomSliderCard';

const BlogsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const cardData = [
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        // Add more cards if needed
    ];

    return (
        <div className='px-20 py-12'>
            <h1 className='text-3xl font-semibold'>Recent Blogs</h1>
            
            <Slider {...settings}>
                {cardData.map((card, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                        <BlogsCustomSliderCard
                            heading1={card.heading1}
                            heading2={card.heading2}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BlogsSlider;
