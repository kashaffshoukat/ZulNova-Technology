import React from 'react'
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomTeamCard from '../components/CustomTeamCard'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { ali, amir, amirbg, anas, daniyal, fida, hamza, hamzabg, haseeb, irfan, laravel, moaz, mudasser, murtaza, pmbg, python, react, react2, salam, salambg, shahbaz, wajid, wajidbg, zubair } from '../assets';



const TeamSlider = () => {
    const sliderRef = useRef(null);

    const getSliderSettings = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        };


        if (window.innerWidth < 700) {
            settings.slidesToShow = 1;
        } else if (window.innerWidth < 1100) {
            settings.slidesToShow = 2;
        } else {
            settings.slidesToShow = 4;
        }

        return settings;
    };

    const settings = getSliderSettings();

    const cardData = [
       
        {
            image: mudasser,
            name: 'Syed Muddasar Anayat',
            position: 'Sr.React JS Developer',
            backgroundColor: '#314252',
            backgroundImage: react
        },
        {
            image: anas,
            name: 'Muhammad Anas',
            position: 'Sr.Laravel Developer',
            backgroundColor: '#F005BC',
            backgroundImage: laravel

        },
        {
            image: amir,
            name: 'Muhammad Amir',
            position: 'Sr.Laravel Developer',
            backgroundColor: '#C8CBFF',
            backgroundImage: amirbg

        },
        {
            image: moaz,
            name: 'Muhammad Moaz',
            position: 'React JS Developer',
            backgroundColor: '#0f3574',
            backgroundImage: react2

        },
        {
            image: ali,
            name: 'Ali Husnain',
            position: 'Laravel Developer',
            backgroundColor: '#c8cbff',
            backgroundImage: amirbg

        },
        {
            image: salam,
            name: 'Abdul Salam',
            position: 'Project Manager',
            backgroundColor: '#05f0bc',
            backgroundImage: salambg

        },
        {
            image: hamza,
            name: 'Hamza Yasin',
            position: 'UI UX Designer',
            backgroundColor: '#008dad',
            backgroundImage: hamzabg

        },
        {
            image: daniyal,
            name: 'Muhammad Daniyal',
            position: 'React JS Developer',
            backgroundColor: '#fc9d1a',
            backgroundImage: react

        },
        {
            image: shahbaz,
            name: 'Shahbaz Ali',
            position: 'Laravel Developer',
            backgroundColor: '#314252',
            backgroundImage: laravel

        },
        {
            image: zubair,
            name: 'Muhammad Zubair',
            position: 'React JS Developer',
            backgroundColor: '#27283d',
            backgroundImage: react2

        },
        {
            image: irfan,
            name: 'Irfan Ali',
            position: 'React JS Developer',
            backgroundColor: '#0f3574',
            backgroundImage: react

        },
        {
            image: fida,
            name: 'Fida Hussain',
            position: 'Python Developer',
            backgroundColor: '#B0B53E',
            backgroundImage: python

        },
        {
            image: murtaza,
            name: 'Ghulam Murtaza',
            position: 'Flutter Developer',
            backgroundColor: '#3357FF',
            backgroundImage: salambg

        },
        {
            image: wajid,
            name: 'Wajid Ali',
            position: 'Cheif Marketing Officer',
            backgroundColor: '#008dad',
            backgroundImage: wajidbg
        },
        {
            image: haseeb,
            name: 'Haseeb Mushtaq',
            position: 'Laravel Developer',
            backgroundColor: '#ebc182',
            backgroundImage: amirbg
        }

    ];


    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };


    const handleNext = () => {
        sliderRef.current.slickNext();
    };


    return (
        <div className='py-4'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-[#2e50ac] text-3xl'>Our Team</h1>
                <p className='text-center'>Our team is dedicated to delivering excellence in web development, specializing in creating solutions that exceed expectations.</p>
            </div>
            {/* *********************** */}
            <div className='px-4 py-12'>

                <div className="relative ">
                    <Slider {...settings} ref={sliderRef}>
                        {cardData.map((data, index) => (
                            <div key={index} className="px-6 py-14">
                                <CustomTeamCard
                                    name={data.name}
                                    position={data.position}
                                    Image={data.image}
                                    backgroundColor={data.backgroundColor}
                                    backgroundImage={data.backgroundImage}
                                />
                            </div>
                        ))}
                    </Slider>
                    <h1
                        onClick={handlePrev}
                        className="absolute cursor-pointer left-0 p-3 bg-black top-1/2 transform -translate-y-1/2 bg-gray-800 text-white  rounded-full text-lg"
                    >
                        <FaAngleLeft />
                    </h1>
                    <h1
                        onClick={handleNext}
                        className="absolute cursor-pointer right-0 p-3 bg-black top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full text-lg"
                    >
                        <FaAngleRight />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default TeamSlider
