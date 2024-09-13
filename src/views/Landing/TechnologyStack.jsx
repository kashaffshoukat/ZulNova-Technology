import React from 'react';
import { FaAngular, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaSwift, FaVuejs } from 'react-icons/fa';
import { FaTrainSubway } from 'react-icons/fa6';
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
const frontenedicons = [
    FaAngular,
    FaPython,
    FaReact,
    FaJs,
    FaPhp,
    AiOutlineConsoleSql,
    FaAngular,
    FaPython,
    FaReact,
    FaJs,
    FaNode,
    FaBootstrap,
];

const TechnologyStack = () => {
    return (
       <div className='px-3 py-3 border rounded-lg'>
         <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-3xl font-semibold text-[#2e5090]'>Technology Stack</h1>
                <p className='text-xl'>Our technology stack empowers us to create advanced web solutions that drive innovation and deliver results.</p>
            </div>
            <div className='mt-3'>  
                <div className='flex flex-wrap mt-3 p-10 gap-14 rounded-lg bg-[#2e5090]'>
                    {frontenedicons.map((Icon, index) => (
                        <Icon key={index} className='text-7xl text-[white]' />
                    ))}
                </div>
            </div>
       </div>
    );
}

export default TechnologyStack;
